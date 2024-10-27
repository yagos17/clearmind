import React, { useState } from "react";
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    ScrollView, 
    useWindowDimensions, 
    NativeSyntheticEvent, 
    NativeScrollEvent 
} from 'react-native';
import { style } from "./styles";
import mainImage from '../../assets/img/Home.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const mainData = {
    title: "Clear Mind",
    text: "Sua jornada para uma mente mais saudável começa aqui: juntos, superamos desafios e celebramos conquistas.",
    image: mainImage
};

const topicData = [
    { title: "Meditação", image: require('../../assets/img/Meditation.png') },
    { title: "Respiração", image: require('../../assets/img/Breathing.png') },
    { title: "Diário", image: require('../../assets/img/Daily.png') },
    { title: "Conteúdos", image: require('../../assets/img/Contents.png') },
    { title: "Comunidade", image: require('../../assets/img/Community.png') },
    { title: "Integração", image: require('../../assets/img/Integration.png') },
];

export default function Start() {
    const navigation = useNavigation<NavigationProp<any>>();
    const { width: screenWidth } = useWindowDimensions(); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTopics, setSelectedTopics] = useState<number[]>([]);

    const handlePress = async () => {
        try {
            navigation.navigate("BottomRoutes", { screen: "Home" });
            console.log("Navigating to Home!");
        } catch (error) {
            console.error("Navigation error:", error);
        }
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
        setCurrentIndex(index);
    };

    const toggleSelectTopic = (index: number) => {
        setSelectedTopics(prev =>
            prev.includes(index) 
                ? prev.filter(i => i !== index) 
                : [...prev, index]
        );
    };

    const totalItems = 2; // Total number of dots in the carousel

    return (
        <View style={style.container}>
            <ScrollView 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={style.scrollView}
            >
                {/* First Carousel Item */}
                <View style={[style.carouselItem, { width: screenWidth }]}>
                    <View style={style.boxTop}>
                        <Image 
                            source={mainData.image}
                            style={style.mainVector}
                            resizeMode="contain" 
                            accessibilityLabel="An illustration representing a clear mind"
                        />
                    </View>
                    <View style={style.boxMid}>
                        <Text style={style.title}>{mainData.title}</Text>
                        <Text 
                            style={style.text} 
                            numberOfLines={3} 
                            ellipsizeMode="tail" 
                        >
                            {mainData.text}
                        </Text>
                    </View>
                </View>

                {/* Second Carousel Item */}
                <View style={[style.carouselItem, { width: screenWidth }]}>
                    <View style={style.boxMid}>
                        <Text style={style.textTopic}>Escolha os tópicos do seu interesse</Text>
                        <ScrollView 
                            contentContainerStyle={{ paddingBottom: 10 }}
                        >
                            <View style={style.topicContainer}>
                                {topicData.map((topic, index) => (
                                    <TouchableOpacity 
                                        key={index} 
                                        style={[
                                            style.topicItem,
                                            selectedTopics.includes(index) && { backgroundColor: 'white' } 
                                        ]}
                                        onPress={() => toggleSelectTopic(index)}
                                    >
                                        <Image source={topic.image} style={style.image} resizeMode="contain" />
                                        <Text style={style.text}>{topic.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>                         
            </ScrollView>

            <View style={style.boxBottom}>
                {[...Array(totalItems)].map((_, index) => (
                    <MaterialIcons 
                        key={index}
                        style={style.circle} 
                        name='circle'
                        size={currentIndex === index ? 15 : 8}
                        color={currentIndex === index ? themes.colors.primary : '#D3D3D3'}
                    />
                ))}
            </View>

            <View style={style.boxBaseboard}>
                <TouchableOpacity 
                    style={style.button} 
                    onPress={handlePress}
                    activeOpacity={0.7} 
                    accessibilityLabel="Avançar"
                    accessibilityHint="Press to proceed to the next screen"
                >
                    <Text style={style.buttonText}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

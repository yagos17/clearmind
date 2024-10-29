import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Linking } from 'react-native';
import { style } from "./styles";
import { themes } from "../../global/themes";
import moodImage from '../../assets/img/MoodImage.png'; 

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [meditationModalVisible, setMeditationModalVisible] = useState(false);
    const [moodLevel, setMoodLevel] = useState(null);

    return (
        <View style={style.container}>
            <Header />
            <InfoBox onStartPress={() => setModalVisible(true)} />
            
            {/* Título de Tópicos */}
            <Text style={style.topicTitle}>Tópicos</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollContainer}>
                <ClickableBox title="Meditação" onPress={() => setMeditationModalVisible(true)} titleSize={12} />
                <ClickableBox title="Tópico 1" onPress={() => {}} />
                <ClickableBox title="Tópico 2" onPress={() => {}} />
                <ClickableBox title="Tópico 3" onPress={() => {}} />
                <ClickableBox title="Tópico 4" onPress={() => {}} />
                <ClickableBox title="Tópico 5" onPress={() => {}} />
            </ScrollView>
            <DailyMessage />

            {/* Modal com perguntas sobre o humor */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Image 
                            source={moodImage}
                            style={style.moodImage}
                        />
                        <Text style={style.modalTitle}>Se você pudesse descrever a sua vida atual com uma palavra, qual seria?</Text>
                        {/* ... (restante do modal) ... */}
                    </View>
                </View>
            </Modal>

            {/* Modal de meditação */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={meditationModalVisible}
                onRequestClose={() => setMeditationModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} style={style.modalContent}>
                        <Image 
                            source={require('../../assets/img/Meditation.png')} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Guia de Meditação</Text>
                        <Text style={style.modalText}>Conteúdos gratuitos, músicas e dicas:</Text>

                        <Text style={style.modalSectionTitle}>Conteúdos Gratuitos</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/user/TheHonestGuys')} style={style.linkContainer}>
                            <Image source={require('../../assets/img/Brain.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Meditações guiadas (YouTube)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.mindful.org')} style={style.linkContainer}>
                            <Image source={require('../../assets/img/Brain.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Artigos sobre meditação (Mindful)</Text>
                        </TouchableOpacity>

                        <Text style={style.modalSectionTitle}>Músicas</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/results?search_query=nature+sounds')} style={style.linkContainer}>
                            <Image source={require('../../assets/img/Brain.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Playlist de sons da natureza</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://freemusicarchive.org/genre/Relaxation/')} style={style.linkContainer}>
                            <Image source={require('../../assets/img/Brain.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Músicas relaxantes para meditar</Text>
                        </TouchableOpacity>

                        <Text style={style.modalSectionTitle}>Dicas</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.headspace.com/blog')} style={style.linkContainer}>
                            <Image source={require('../../assets/img/Brain.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Dicas adicionais (Headspace Blog)</Text>
                        </TouchableOpacity>

                        <Text style={style.modalDisclaimer}>
                            * O conteúdo mencionado é de terceiros. Estou apenas divulgando para ajudar na prática de meditação.
                        </Text>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setMeditationModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

// Componente da caixa clicável
const ClickableBox = ({ title, onPress, titleSize }) => (
    <TouchableOpacity style={style.clickableBox} onPress={onPress}>
        <Image 
            source={require('../../assets/img/Meditation.png')} 
            style={style.boxImg}
        />
        <Text style={[style.boxTitle, { fontSize: titleSize }]}>{title}</Text>
    </TouchableOpacity>
);

// Componentes auxiliares
const Header = () => (
    <View style={style.header}>
        <View style={{ flex: 1 }}>
            <Text style={style.greeting}>Hello,</Text>
            <Text style={[style.greeting, style.bold]}>User</Text>
        </View>
        <Image 
            source={require('../../assets/img/Photo.png')} 
            style={style.profileImage}
        />
    </View>
);

const InfoBox = ({ onStartPress }) => (
    <View style={style.box}>
        <View style={style.boxContent}> 
            <Image 
                source={require('../../assets/img/Mascot.png')} 
                style={style.boxImage}
            />
            <Text style={style.title}>Saiba agora o seu nível de humor</Text>
        </View>
        <TouchableOpacity 
            style={style.button}
            activeOpacity={0.7} 
            accessibilityLabel="Iniciar"
            accessibilityHint="Press to proceed to the forms screen"
            onPress={onStartPress} // Passa a função para o botão
        >
            <Text style={style.buttonText}>Iniciar</Text>
        </TouchableOpacity>
    </View>
);

const DailyMessage = () => (
    <View>
        <View style={style.boxMessage}>
            <Image 
                source={require('../../assets/img/Message.png')} 
                style={style.imageMessage}
            />
            <Text style={style.textMessage}>
                Assim como um jardim floresce com cuidados e dedicação, nossa vida também floresce quando cultivamos sonhos e nutrimos nossas paixões.
            </Text>
        </View>
    </View>
);
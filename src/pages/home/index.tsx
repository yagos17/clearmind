import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Linking, Alert } from 'react-native';
import { style } from "./styles";
import moodImage from '../../assets/img/MoodImage.png'; 

export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [meditationModalVisible, setMeditationModalVisible] = useState(false);

    const handleMoodSelection = (mood) => {
        let response;
        switch (mood) {
            case 'brilhante':
                response = { message: "Você está se sentindo feliz!", tip: "Continue fazendo o que te faz bem." };
                break;
            case 'estavel':
                response = { message: "Você está se sentindo neutro.", tip: "Tente se conectar com coisas que te trazem alegria." };
                break;
            case 'pesada':
                response = { message: "Você está se sentindo triste.", tip: "É importante falar sobre isso. Considere conversar com alguém." };
                break;
            default:
                response = { message: "", tip: "" };
        }

        // Exibir o alerta
        Alert.alert(
            response.message,
            response.tip,
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );

        setModalVisible(false); // Fecha o modal
    };

    return (
        <View style={style.container}>
            <Header />
            <InfoBox onStartPress={() => setModalVisible(true)} />
            
            <Text style={style.topicTitle}>Tópicos</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollContainer}>
                <ClickableBox title="Meditação" onPress={() => setMeditationModalVisible(true)} titleSize={12} />
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
                        <Text style={style.modalTitle}>Qual palavra melhor descreve sua energia atualmente?</Text>
                        
                        <View style={style.buttonContainer}>
                            <TouchableOpacity onPress={() => handleMoodSelection('brilhante')} style={style.moodButton}>
                                <Text style={style.moodButtonText}>Brilhante</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleMoodSelection('estavel')} style={style.moodButton}>
                                <Text style={style.moodButtonText}>Estável</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleMoodSelection('pesada')} style={style.moodButton}>
                                <Text style={style.moodButtonText}>Pesada</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => setModalVisible(false)} style={style.closeButton}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
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

                        {/* Links para meditação e dicas... */}

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
            onPress={onStartPress}
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
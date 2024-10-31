import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Alert, TextInput, Linking } from 'react-native';
import { style } from "./styles";

// Importação de imagens
import moodImage from '../../assets/img/MoodImage.png';
import meditationImage from '../../assets/img/Meditation.png'; 
import breathingImage from '../../assets/img/Breathing.png'; 
import dailyImage from '../../assets/img/Daily.png'; 
import contentsImage from '../../assets/img/Contents.png'; 
import communityImage from '../../assets/img/Community.png'; 
import integrationImage from '../../assets/img/Integration.png'; 

// Componente principal
export default function Home() {
    const [modalVisible, setModalVisible] = useState(false);
    const [meditationModalVisible, setMeditationModalVisible] = useState(false);
    const [breathingModalVisible, setBreathingModalVisible] = useState(false);
    const [dailyModalVisible, setDailyModalVisible] = useState(false);
    const [contentsModalVisible, setContentsModalVisible] = useState(false);
    const [communityModalVisible, setCommunityModalVisible] = useState(false);
    const [integrationModalVisible, setIntegrationModalVisible] = useState(false);
    const [diaryEntry, setDiaryEntry] = useState('');
    const [reflectionText, setReflectionText] = useState('');

    // Função para iniciar a meditação
    const startMeditation = () => {
        Alert.alert("Meditando por 5 minutos!", "Descanse e relaxe.");
    };

    // Função para selecionar uma emoção
    const handleEmotionSelection = (emotion) => {
        const tips = {
            'ansioso': "Tente respirar mais profundamente. Inspire contando até 4, segure por 4 e expire contando até 6.",
            'estressado': "Concentre-se em expirar lentamente. Tente liberar a tensão a cada expiração.",
            'relaxado': "Mantenha a respiração leve e tranquila. Continue respirando assim e relaxe.",
        };
        Alert.alert("Dica para você", tips[emotion] || "Concentre-se na sua respiração.");
    };

    // Função para selecionar um humor
    const handleMoodSelection = (mood) => {
        const responses = {
            'brilhante': { message: "Você está se sentindo feliz!", tip: "Continue fazendo o que te faz bem." },
            'estavel': { message: "Você está se sentindo neutro.", tip: "Tente se conectar com coisas que te trazem alegria." },
            'pesada': { message: "Você está se sentindo triste.", tip: "É importante falar sobre isso. Considere conversar com alguém." },
        };

        const response = responses[mood] || { message: "", tip: "" };
        Alert.alert(response.message, response.tip, [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
        setModalVisible(false);
    };

    // Função para registrar resposta do desafio de gratidão
    const handleChallengeResponse = (didComplete) => {
        const message = didComplete ? "Ótimo trabalho! Você cumpriu o desafio!" : "Não tem problema, tente novamente na próxima vez.";
        Alert.alert("Desafio", message);
    };

    return (
        <View style={style.container}>
            <Header />
            <InfoBox onStartPress={() => setModalVisible(true)} />
            <Text style={style.topicTitle}>Tópicos</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.scrollContainer}>
                {['Meditação', 'Respiração', 'Diário', 'Conteúdos', 'Comunidade', 'Integração'].map((title, index) => (
                    <ClickableBox 
                        key={index} 
                        title={title} 
                        onPress={() => {
                            const modalStates = [
                                setMeditationModalVisible, 
                                setBreathingModalVisible, 
                                setDailyModalVisible, 
                                setContentsModalVisible, 
                                setCommunityModalVisible, 
                                setIntegrationModalVisible
                            ];
                            modalStates[index](true);
                        }} 
                        titleSize={12} 
                        imageSource={[meditationImage, breathingImage, dailyImage, contentsImage, communityImage, integrationImage][index]} 
                    />
                ))}
            </ScrollView>

            <DailyMessage />

            {/* Modal para seleção de humor */}
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
                            source={meditationImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Guia de Meditação</Text>
                        <Text style={style.modalText}>Algumas músicas para ajudá-lo:</Text>
                        
                        <TouchableOpacity style={style.linkContainer} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Rl1s1iGEtDE')}>
                            <Image source={require('../../assets/img/youtube.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Meditation & Relaxing</Text>
                        </TouchableOpacity>
                        <Text style={style.modalDisclaimer}>Por [Nature Healing Society]</Text>

                        <TouchableOpacity style={style.linkContainer} onPress={() => Linking.openURL('https://open.spotify.com/playlist/37i9dQZF1DXavtmWzC1MpQ?si=864a482677e74b09')}>
                            <Image source={require('../../assets/img/spotify.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Sons da Natureza</Text>
                        </TouchableOpacity>
                        <Text style={style.modalDisclaimer}>Por [Spotify]</Text>

                        <TouchableOpacity 
                            style={style.startButton} 
                            onPress={startMeditation}
                        >
                            <Text style={style.startButtonText}>Começar Meditação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setMeditationModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>

            {/* Modal de respiração */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={breathingModalVisible}
                onRequestClose={() => setBreathingModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} style={style.modalContent}>
                        <Image 
                            source={breathingImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Guia de Respiração</Text>
                        <Text style={style.modalText}>Como você está se sentindo hoje?</Text>

                        <TouchableOpacity style={style.emotionButton} onPress={() => handleEmotionSelection('ansioso')}>
                            <Text style={style.emotionButtonText}>Ansioso</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.emotionButton} onPress={() => handleEmotionSelection('estressado')}>
                            <Text style={style.emotionButtonText}>Estressado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.emotionButton} onPress={() => handleEmotionSelection('relaxado')}>
                            <Text style={style.emotionButtonText}>Relaxado</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setBreathingModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>

            {/* Modal de diário */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={dailyModalVisible}
                onRequestClose={() => setDailyModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Image 
                            source={dailyImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Diário</Text>
                        <Text style={style.modalText}>Dica: Escreva sobre como você se sente ou o que está em sua mente.</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="Escreva sua entrada..."
                            multiline
                            value={diaryEntry}
                            onChangeText={setDiaryEntry}
                        />

                        <TouchableOpacity 
                            style={style.saveButton}
                            onPress={() => {
                                Alert.alert("Entrada salva!", "Seu diário foi atualizado.");
                                setDiaryEntry('');
                            }}
                        >
                            <Text style={style.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setDailyModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal de conteúdos */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={contentsModalVisible}
                onRequestClose={() => setContentsModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} style={style.modalContent}>
                        <Image 
                            source={contentsImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Conteúdos</Text>
                        <Text style={style.modalText}>Alguns conteúdos que podem enriquecer seu conhecimento sobre saúde mental:</Text>
                        
                        <TouchableOpacity 
                            style={style.linkContainer} 
                            onPress={() => Linking.openURL('https://open.spotify.com/show/2DrJJ5V1ZKAOJipWJP6jqy?si=3b9fde8365284d9a')}
                        >
                            <Image source={require('../../assets/img/spotify.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>AnsiedadeCast</Text>
                        </TouchableOpacity>
                        <Text style={style.modalDisclaimer}>Por [Psicóloga Thalita Couto] - [https://open.spotify.com/show/2DrJJ5V1ZKAOJipWJP6jqy?si=8c187eb9ece94873]</Text>

                        <TouchableOpacity 
                            style={style.linkContainer} 
                            onPress={() => Linking.openURL('https://open.spotify.com/show/2ChmAxHXJtF9n6cw1lkKdB?si=09f24976ecd744bb')}
                        >
                            <Image source={require('../../assets/img/spotify.png')} style={style.linkIcon} />
                            <Text style={style.linkText}>Tratando sua Ansiedade</Text>
                        </TouchableOpacity>
                        <Text style={style.modalDisclaimer}>Por [Laura Tomasini Potrich] - [https://open.spotify.com/show/2ChmAxHXJtF9n6cw1lkKdB?si=33ec25fed24f42d3]</Text>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setContentsModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>

            {/* Modal de comunidade */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={communityModalVisible}
                onRequestClose={() => setCommunityModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} style={style.modalContent}>
                        <Image 
                            source={communityImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Comunidade</Text>

                        <Image 
                            source={require('../../assets/img/Error.png')} // Substitua pelo caminho da imagem desejada
                            style={style.noEventsImage} 
                        />
                        <Text style={style.noEventsText}>Sem eventos</Text>

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setCommunityModalVisible(false)}
                        >
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>

            {/* Modal de integração */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={integrationModalVisible}
                onRequestClose={() => setIntegrationModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} style={style.modalContent}>
                        <Image 
                            source={integrationImage} 
                            style={style.moodImage} 
                        />
                        <Text style={style.modalTitle}>Desafio Semanal: Integração</Text>
                        <Text style={style.modalText}>Desafio: Pratique a Gratidão.</Text>
                        <Text style={style.modalText}>Durante esta semana, escreva diariamente uma coisa pela qual você é grato.</Text>
                        <Text style={style.modalText}>Objetivo: Aumentar a conscientização sobre as coisas boas da sua vida.</Text>

                        <Text style={style.modalText}>Você cumpriu o desafio?</Text>
                        <View style={style.buttonContainer}>
                            <TouchableOpacity onPress={() => handleChallengeResponse(true)} style={style.challengeButton}>
                                <Text style={style.challengeButtonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChallengeResponse(false)} style={style.challengeButton}>
                                <Text style={style.challengeButtonText}>Não</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={style.modalText}>Reflexões:</Text>
                        <TextInput
                            style={style.textInput}
                            placeholder="Escreva suas reflexões aqui..."
                            multiline
                            value={reflectionText}
                            onChangeText={setReflectionText}
                        />

                        <TouchableOpacity 
                            style={style.closeButton} 
                            onPress={() => setIntegrationModalVisible(false)}
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
const ClickableBox = ({ title, onPress, titleSize, imageSource }) => (
    <TouchableOpacity style={style.clickableBox} onPress={onPress}>
        <Image 
            source={imageSource} 
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
import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

// Estilos do componente
export const style = StyleSheet.create({
    // Estilo principal do container
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: themes.colors.bgScreen,
    },
    // Estilo do cabeçalho
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 120,
        padding: 20,
    },
    // Estilo de saudação
    greeting: {
        fontSize: 18,
    },
    // Estilo em negrito
    bold: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    // Estilo da imagem de perfil
    profileImage: {
        width: 70,
        height: 70,
    },
    // Estilo da caixa principal
    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 24,
        marginTop: -120,
    },
    // Estilo do conteúdo da caixa
    boxContent: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
    },
    // Estilo da imagem na caixa
    boxImage: {
        width: 120,
        height: 120,
        marginRight: 10,
        marginBottom: -60,
    },
    // Estilo do título da caixa
    title: {
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold',
    },
    // Estilo do botão
    button: {
        backgroundColor: themes.colors.primary,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 110,
    },
    // Estilo do texto do botão
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Estilo da mensagem na caixa
    boxMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 15,
    },
    // Estilo da imagem da mensagem
    imageMessage: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    // Estilo do texto da mensagem
    textMessage: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        flexShrink: 1,
    },
    // Estilo do modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    // Conteúdo do modal
    modalContent: {
        width: '75%',
        backgroundColor: themes.colors.bgScreen,
        borderRadius: 24,
        padding: 20,
        maxHeight: '75%',
    },
    // Título do modal
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    // Texto do modal
    modalText: {
        color: 'black',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'left',
    },
    // Container dos botões no modal
    buttonContainer: {
        marginVertical: 20,
    },
    // Estilo do botão de humor
    moodButton: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: themes.colors.primary,
        borderRadius: 24,
        alignItems: 'center',
        width: '100%',
    },
    // Texto do botão de humor
    moodButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    // Estilo do botão de fechar
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems: 'center',
        width: '100%',
    },
    // Estilo da imagem da caixa
    boxImg: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    // Título da caixa
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Estilo da imagem do humor
    moodImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    // Estilo do container do link
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 24,
        width: '100%',
    },
    // Ícone do link
    linkIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    // Texto de isenção no modal
    modalDisclaimer: {
        color: 'black',
        fontSize: 12,
        textAlign: 'left',
    },
    // Estilo do container do scroll
    scrollContainer: {
        flexDirection: 'row',
    },
    // Estilo da caixa clicável
    clickableBox: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 15,
        alignItems: 'center',
        marginRight: 10,
        width: 100,
        height: 100,
    },
    // Título do tópico
    topicTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    // Estilo do campo de texto
    textInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        width: '90%',
    },
    // Estilo do texto do link
    linkText: {
        color: 'black',
        marginVertical: 5,
    },
    // Estilo do botão de início
    startButton: {
        backgroundColor: themes.colors.primary,
        padding: 15,
        borderRadius: 24,
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
    },
    // Texto do botão de início
    startButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Estilo do botão de emoção
    emotionButton: {
        backgroundColor: themes.colors.primary,
        borderRadius: 24,
        padding: 10,
        marginVertical: 25,
        width: '80%',
        alignItems: 'center',
    },
    // Texto do botão de emoção
    emotionButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    // Container dos botões na integração
    challengeButtonContainer: {
        flexDirection: 'row', // Para alinhar os botões lado a lado
        justifyContent: 'space-between', // Para espaçar os botões igualmente
        marginVertical: 5, // Margem vertical opcional
    },
    // Botão de integração
    challengeButton: {
        backgroundColor: themes.colors.primary,
        borderRadius: 12,
        padding: 10,
        marginVertical: 5,
        margin: 10,
    },
    // Texto do botão de integração
    challengeButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
});
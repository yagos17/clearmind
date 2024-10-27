import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: themes.colors.bgScreen,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 120,
        padding: 20,
    },
    greeting: {
        fontSize: 18,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    profileImage: {
        width: 70,
        height: 70,
    },
    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 24,
        marginTop: -120,
    },
    boxContent: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
    },
    boxImage: {
        width: 120,
        height: 120,
        marginRight: 10,
        marginBottom: -60,
    },
    title: {
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: themes.colors.primary,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 110,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    buttonTopics: {
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 100,
    },
    textTopics: {
        fontSize: 10,
    },
    boxMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 15,
    },
    imageMessage: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    textMessage: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        flexShrink: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: themes.colors.bgScreen,
        borderRadius: 24,
        padding: 20,
    },    
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'left',
    },
    modalSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    moodButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems: 'center',
        width: '100%',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems: 'center',
        width: '100%',
    },
    clickableBox: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    boxImg: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    moodImage: {
        width: 100, 
        height: 100, 
        marginBottom: 20, 
        alignSelf: 'center'
    },
    modalContent: {
        width: '75%',
        backgroundColor: themes.colors.bgScreen,
        borderRadius: 24,
        padding: 10,
        maxHeight: '75%', 
    },
    modalText: {
        color: 'black', 
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'left',
    },    
    modalSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    linkText: {
        color: 'black', 
        fontSize: 12,
        textAlign: 'left',
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 24,
    },
    linkIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    modalDisclaimer: {
        color: 'black', 
        fontSize: 12,
        textAlign: 'left',
    }    
});
import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
        backgroundColor: themes.colors.bgScreen,   
    },
    chatContainer: {
        flex: 1,
        marginBottom: 30,
        padding: 10,
        backgroundColor: 'white',
        marginTop: 70,
        borderRadius: 24,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: themes.colors.primary,
        color: 'white',
        padding: 10,
        marginVertical: 5,
        maxWidth: '100%',
        borderRadius: 24,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#f1f1f1',
        color: 'black',
        padding: 10,
        marginVertical: 5,
        maxWidth: '100%',
        borderRadius: 24,
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 75,
        marginBottom: 30,
        backgroundColor: 'white',
        borderRadius: 24,
    },
    button: {
        backgroundColor: themes.colors.primary,
        padding: 10,
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 12,
    },
})
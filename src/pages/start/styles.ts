import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

// Estilos da tela
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.bgScreen,
    },
    scrollView: {
        flex: 1,
    },
    carouselItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
    },
    boxTop: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid: {
        flex: 1,
        width: '110%',
        paddingHorizontal: 37,
        justifyContent: 'center',
        marginBottom: 10,
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    boxBaseboard: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 50,
    },
    mainVector: {
        resizeMode: "contain",
        marginTop: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 160,
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 120,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: themes.colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    circle: {
        marginHorizontal: 2,
        margin: 20,
    },
    topicContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between', 
    },
    topicItem: {
        width: '48%',
        marginBottom: 10,
        alignItems: 'center', 
        padding: 10, 
        backgroundColor: '#D4D4D4', 
        borderRadius: 25,
    },    
    image: {
        width: 100,
        height: 100,
    },    
    textTopic: {
        fontSize: 30, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginVertical: 50, 
    }
});
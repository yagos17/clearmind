import { StyleSheet,Dimensions} from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
        backgroundColor: themes.colors.bgScreen,   
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        padding: 15,
        backgroundColor: themes.colors.primary,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: "center",
        width: "50%", 
        minHeight: 50, 
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
})
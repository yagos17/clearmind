import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
        backgroundColor: themes.colors.bgScreen,   
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        padding: 15,
        backgroundColor: themes.colors.primary,
        borderRadius: 5,
        alignItems: "center",
        width: "60%", 
        minHeight: 50,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
});
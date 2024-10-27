import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    tabArea:{
        backgroundColor:'white',
        flexDirection:'row',
        height:100,
        justifyContent:'space-around'
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
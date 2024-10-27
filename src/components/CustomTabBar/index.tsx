import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { style } from "./styles"; 
import { AntDesign } from '@expo/vector-icons';
import { themes } from "../../global/themes";

export default ({ state, navigation }) => {
    const go = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Home")}>
                <AntDesign 
                    name="home" 
                    style={{ 
                        opacity: state.index === 0 ? 1 : 1,
                        color: state.index === 0 ? themes.colors.primary : 'black',
                        fontSize: 24,     
                    }} 
                />
                <Text style={{ fontSize: 10 }}>
                    Início
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Chat")}>
                <AntDesign 
                    name="inbox" 
                    style={{ 
                        opacity: state.index === 1 ? 1 : 1,
                        color: state.index === 1 ? themes.colors.primary : 'black',
                        fontSize: 24,     
                    }} 
                />
                <Text style={{ fontSize: 10 }}>
                    Bate-papo
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Alert")}>
                <AntDesign 
                    name="notification" 
                    style={{ 
                        opacity: state.index === 2 ? 1 : 1,
                        color: state.index === 2 ? themes.colors.primary : 'black',
                        fontSize: 24,     
                    }} 
                />
                <Text style={{ fontSize: 10 }}>
                    Notificações
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Setting")}>
                <AntDesign 
                    name="setting" 
                    style={{ 
                        opacity: state.index === 3 ? 1 : 1,
                        color: state.index === 3 ? themes.colors.primary : 'black',
                        fontSize: 24,                        
                    }} 
                />
                <Text style={{ fontSize: 10 }}>
                    Configurações
                </Text>
            </TouchableOpacity>
        </View>
    );
};

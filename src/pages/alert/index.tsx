import React, { useState } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { style } from "./styles"; 

export default function Alert() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const toggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <View style={style.container}>
            <Text style={style.text}>
                Notificações estão {notificationsEnabled ? 'Ativadas' : 'Desativadas'}
            </Text>
            <TouchableOpacity 
                style={style.button}
                onPress={toggleNotifications}
            >
                <Text style={style.buttonText}>
                    {notificationsEnabled ? 'Desligar Notificações' : 'Ligar Notificações'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
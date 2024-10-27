import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { style } from "./styles";

export default function Setting() {
    const handlePress = (option) => {
        Alert.alert(`Você clicou em ${option}`);
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Configurações</Text>
            {["Privacidade", "Conta", "Sobre"].map((option) => (
                <TouchableOpacity
                    key={option}
                    style={style.button}
                    onPress={() => handlePress(option)}
                >
                    <Text style={style.buttonText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
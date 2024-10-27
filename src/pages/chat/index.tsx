import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { style } from "./styles"; 

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const positiveResponses = [
        "Você é incrível!",
        "Acredite em si mesmo!",
        "Cada dia é uma nova oportunidade!",
        "Você pode fazer isso!",
        "O sucesso está a caminho!",
    ];

    const handleSend = () => {
        if (message.trim()) {
            setChat(prevChat => [...prevChat, { text: message, sender: "user" }]);
            const response = positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
            setChat(prevChat => [...prevChat, { text: response, sender: "bot" }]);
            setMessage("");
        }
    };

    return (
        <View style={style.container}>
            <ScrollView style={style.chatContainer}>
                {chat.map((msg, index) => (
                    <Text key={index} style={msg.sender === "user" ? style.userMessage : style.botMessage}>
                        {msg.text}
                    </Text>
                ))}
            </ScrollView>
            <TextInput
                style={style.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Digite sua mensagem..."
            />
            <TouchableOpacity style={style.button} onPress={handleSend}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}
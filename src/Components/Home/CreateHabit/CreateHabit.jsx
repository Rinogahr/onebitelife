import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";





export default function CreateHabit({ habiteArea, borderColor}){

    function handleCreate(){
        console.log(`Botão da área clicada: ${habiteArea}`)
    }
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={[myStyle.button, {borderColor: borderColor}]}
            onPress={handleCreate}
        >
            <Text style={myStyle.habitTitle}>
                Adicionar meta {habiteArea === "Mente" ? "da" : "do"} {habiteArea}
            </Text>
        </TouchableOpacity>
    );
}

const myStyle = StyleSheet.create({
    button: {
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderStyle: "dotted",
        borderColor: "#fafafa",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    habitTitle:{
        color: "#fafafa",
        fontSize: 16,
        fontWeight: "bold",
    },
})
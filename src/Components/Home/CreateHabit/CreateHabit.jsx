import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";




export default function CreateHabit({ habitArea, borderColor}){
    const navegacao = useNavigation();

    function handleCreate(){
        console.log(habitArea);
        navegacao.navigate("HabitPage", {
            create: true,
            habit: { habitArea: habitArea}
        });
    }
    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={[myStyle.button, {borderColor: borderColor}]}
            onPress={handleCreate}
        >
            <Text style={myStyle.habitTitle}>
                Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
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
import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";





export default function EditeHabit({ habit, frequency,  habitArea, checkColor }){
        function handleEdit(){
            console.log("Botão de editar clicado")
        }

        function handleCheck(){
            console.log("Botão de checkc do ${habitArea}")
        }
   
    return(
        <TouchableOpacity
            activeOpacity={0.9}
            style={myStyle.button}
            onPress={handleEdit}
        >
            <View style={myStyle.habitTetx}>
                <Text style={myStyle.habitTitle}> {habit} </Text>
                <Text style={myStyle.habitFrequency}> {frequency} </Text>
            </View>

            <TouchableOpacity
                style={[myStyle.check, {borderColor: checkColor}]}
                onPress={handleCheck}
            >
            </TouchableOpacity> 

        </TouchableOpacity>
    );
}

const myStyle = StyleSheet.create({
    button:{
        backgroundColor: "#151515",
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
        
    },
    habitTitle:{
        color: "#fafafa",
        fontWeight:  "bold",
    },
    habitFrequency:{
        color: "#fafafa",
    },
    check:{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
    },



})
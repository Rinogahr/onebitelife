import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const navegacao = useNavigation();


    return(
        <View style={myStyle.container}>


        </View>
    );
}


const myStyle = StyleSheet.create({
    container:{

    }
});
import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
export default function Start(){
    return(
        <View style={myStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center"}}>
                    <Image style={myStyle.logo} source={require('../../assets/icons/logo3.png')}/>
                    <Text style={myStyle.desciption}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o
                        melhor nivel.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#af0bf0"
    },
     logo:{
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20
     },
     desciption:{
        color: "#fafafa",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
     }
});
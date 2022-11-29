import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function ExplanationCard(){
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.title}>
                Através deste APP você vai consolidar {"\n"}
                4 habitos de áreas fundamentais:
            </Text>



            <View style={myStyle.explanationContainer}>
                <Image source={require('../../assets/icons/educationIcon.png')}
                style={myStyle.icon}/>
                <Text style={myStyle.description}>
                    <Text style={myStyle.mind}>Mente: </Text>
                    Hábitos para melhorar sua inteligência/sabedoria.
                </Text>
            </View>


            <View style={myStyle.explanationContainer}>
                <Image source={require('../../assets/icons/moneyIcon.png')}
                style={myStyle.icon}/>
                <Text style={myStyle.description}>
                    <Text style={myStyle.money}>Financeiro: </Text>
                    Hábitos para te ajudar com o controle financeiro.
                </Text>
            </View>

            <View style={myStyle.explanationContainer}>
                <Image source={require('../../assets/icons/bodyIcon.png')}
                style={myStyle.icon}/>
                <Text style={myStyle.description}>
                    <Text style={myStyle.body}>Corpo: </Text>
                    Hábitos para te deichar
                    {"\n"}
                    mais saudável e forte.
                </Text>
            </View>


            <View style={myStyle.explanationContainer}>
                <Image source={require('../../assets/icons/funIcon.png')}
                style={myStyle.icon}/>
                <Text style={myStyle.description}>
                    <Text style={myStyle.fun}>Humor: </Text>
                    Hábitos para controlar o stress
                    {"\n"}
                    e aumentar felicidade.
                </Text>
            </View>

        </View>
    );
}


const myStyle = StyleSheet.create({
    container:{
        backgroundColor: "#fafafa",
        width: 350,
        borderRadius: 25,
        padding: 30,
    },
    title:{
        fontWeight: "bold",
        color: "#292A4C",
        textAlign: "center",
        fontSize: 16,

    },
    explanationContainer:{
       flexDirection: "row",
       marginTop: 30,

    },
    icon:{
        width: 40,
        height: 40,
        marginRight: 5
    },

    description:{
        color: "#000",
        fontWeight: "500",
    },
    mind:{
        color: "#9087F3",
        fontWeight: "bold"
    },
    money:{
        color: "#85BB65",
        fontWeight: "bold"
    },
    body:{
        color: "#FF0044",
        fontWeight: "bold"
    },
    fun:{
        color: "#FE7F23",
        fontWeight: "bold"
    }



});
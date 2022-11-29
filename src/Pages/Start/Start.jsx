import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus/LifeStatus";
import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import { useNavigation } from "@react-navigation/native";




export default function Start(){
    const handleNavAppExplanation = () => {
        console.log("testando o clique");
    }


    return(
        <View style={myStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center"}}>
                    <Image style={myStyle.logo} source={require('../../assets/icons/logo3.png')}/>
                    <LifeStatus/>
                    <Text style={myStyle.desciption}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o
                        melhor nivel.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#292A4C"
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
import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar/StatusBar";

export default function Home(){
    const navegacao = useNavigation();
    function handleNavExplanation(){
        navegacao.navigate("AppExplanation");
    }

    return(
        <View style={myStyle.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={myStyle.dailyCheks}>❤️ 20 dias - ✔️ 80 checks</Text>
                    <LifeStatus/>
                    <StatusBar/>
                </View>
                <Text style={myStyle.explanationText}
                onPress={ () => handleNavExplanation()}>Ver explicação novamente</Text>
            </ScrollView>
        </View>
    );
}


const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#292A4C",
    },
    dailyCheks:{
        color: "#fafafa",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    explanationText:{
        color: "#fafafa",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 25,
    }
});
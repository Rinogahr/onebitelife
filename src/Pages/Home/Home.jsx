import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit/CreateHabit";

export default function Home(){

    const [midHabit, setMidHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

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
                    <CreateHabit habiteArea="Mente" borderColor="#90B7F3"/>
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
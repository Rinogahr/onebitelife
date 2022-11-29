import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus(){

/*Status:
    100 - Maximo
    50  - Médio
    25  - Baixo
    00  - Curto (Acabou o game)
    No robô, nós temos primeiros Felicidade e depois Saúde **-**
*/

    return(
        <View style={myStyle.conteiner}>
            <Lottie
                source={require("../../../assets/education/education-100.json")}
                autoPlay
                loop
                style={myStyle.educationAnimation}
            />
            <Lottie
                source={require("../../../assets/money/money-100.json")}
                autoPlay
                loop
                style={myStyle.moneyAnimation}
            />
            <Lottie
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay
                loop
                style={myStyle.robotAnimation}
            />
        </View>
    );
}

const myStyle = StyleSheet.create({
    conteiner:{
        width: 300,
        height: 300,
    },
    educationAnimation:{
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",

    },
    moneyAnimation:{
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute",
    },
    robotAnimation:{
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    }

});
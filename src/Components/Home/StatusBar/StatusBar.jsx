import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import LifeStatus from "../../Common/LifeStatus/LifeStatus";


export default function StatusBar(){
    return(
        <View style={myStyle.container}>
            <View style={myStyle.statusBarContainer}>
                <Image
                    source={require("../../../assets/icons/educationIcon.png")}
                    style={myStyle.icon}/>
                <ProgressBar progress={1} color={"#90B7F3"} style={myStyle.progress}/>
            </View>
            
            <View style={myStyle.statusBarContainer}>
                <Image
                    source={require("../../../assets/icons/moneyIcon.png")}
                    style={myStyle.icon}/>
                <ProgressBar progress={0} color={"#85BB65"} style={myStyle.progress}/>
            </View>
            
            <View style={myStyle.statusBarContainer}>
                <Image
                    source={require("../../../assets/icons/bodyIcon.png")}
                    style={myStyle.icon}/>
                <ProgressBar progress={0} color={"#FF0043"} style={myStyle.progress}/>
            </View>
            
            <View style={myStyle.statusBarContainer}>
                <Image
                    source={require("../../../assets/icons/funIcon.png")}
                    style={myStyle.icon}/>
                <ProgressBar progress={0} color={"#FE7F23"} style={myStyle.progress}/>
            </View>
        </View>
    );
}

const myStyle = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: "#151515",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    statusBarContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    progress:{
        borderRadius: 10,
        width: 250,
        height: 10,
        marginRight: 5
    },
    icon:{
        width: 25,
        height: 25,
        marginRight: 5,
    }

})
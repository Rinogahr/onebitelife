import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Image, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";


export default function HabitPage(){
    const navegacao = useNavigation();
    return(
        <View style={myStyle.container}>
             <ScrollView>
                <View>
                    <TouchableOpacity
                        style={myStyle.bakPageBtn}
                        onPress={ () => navegacao.goBack()}
                    >
                        <Image
                            source={require("../../assets/icons/arrowBack.png")}
                            style={myStyle.arrowBack}
                        />
                    </TouchableOpacity>
                    <View style={myStyle.mainContent}></View>
                </View>
             </ScrollView>
        </View>
    );
}


const myStyle = StyleSheet.create({
    continue:{
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    bakPageBtn:{
        width: 40,
        height: 40,
        margin: 25,
    },
    arrowBack:{
        width: 40,
        height: 40,
    },
    mainContent:{
        width: 250,
        alignSelf: "center",
    },
});
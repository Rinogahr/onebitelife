import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Image, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";


export default function HabitPage({ route }){
    const navegacao = useNavigation();
    const { create, habit } = route.params;
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
                    <View style={myStyle.mainContent}>
                        <Text style={myStyle.title}>Configurações {"\n"} de hábito</Text>
                        <Text style={myStyle.inputText}>Área</Text>
                        <View style={myStyle.inputContainer}>
                            <Text style={myStyle.area}>{habit?.habitArea}</Text>
                        </View>
                    </View>
                </View>
             </ScrollView>
        </View>
    );
}


const myStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#292A4C",
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
    title:{
        fontWeight: "bold",
        textAlign: "center",
        color: "#fafafa",
        fontSize: 25,
    },
    inputText:{
        color: "#fafafa",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },
    inputContainer:{
        borderWidth: 2,
        borderBottomColor: "#fafafa",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    area:{
        color: "#BBBBBB",
        fontSize: 20,
        fontWeight: "bold",
        
    },
});
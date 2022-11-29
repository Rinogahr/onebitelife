import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";

export default function AppExplanation(){
    const handleShoWHome = () =>{
        console.log("handleShoWHome");
    }
    return(
        <View style={myStyle.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={myStyle.title}>Antes, deixa {"\n"} eu te explicar...</Text>
                    <ExplanationCard/>
                    <Text style={myStyle.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style={myStyle.description}>
                        Na proxima tela você vai  poder escolher {"\n"}
                        seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleShoWHome}
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
        backgroundColor: "#292A4C",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fafafa",
        textAlign: "center",
        marginVertical: 40
    },
    descriptionCta:{
        color: "#fafafa",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description:{
        color: "#fafafafa",
        textAlign: "center",
        marginBottom: 30,
    }
});
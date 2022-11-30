import React, {useEffect, useState} from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit/CreateHabit";
import EditeHabit from "../../Components/Home/EditHabit/EditHabit";

export default function Home(){

    const [mindHabit, setMindHabit] = useState();
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

                    { mindHabit ? (
                        <EditeHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habiTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindHabit?.habitArea}
                            checkColor="#90B7F3"
                        />
                    ) : <CreateHabit habiteArea="Mente" borderColor="#90B7F3"/> }

                    { moneyHabit ? (
                        <EditeHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habiTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyHabit?.habitArea}
                            checkColor="#85BB65"
                        />
                    ) : <CreateHabit habiteArea="Financeiro" borderColor="##85BB65"/> }

                    { bodyHabit ? (
                        <EditeHabit
                            habit={bodyHabit?.habitName}
                            frequency={`${bodyHabit?.habiTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyHabit?.habitArea}
                            checkColor="#FF0044"
                        />
                    ) : <CreateHabit habiteArea="Corpo" borderColor="#FF0044"/> }

                    { funHabit ? (
                        <EditeHabit
                            habit={funHabit?.habitName}
                            frequency={`${funHabit?.habiTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funHabit?.habitArea}
                            checkColor="#FE7F23"
                        />
                    ) : <CreateHabit habiteArea="Humor" borderColor="#FE7F23"/> }
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
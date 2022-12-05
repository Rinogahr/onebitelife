import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Image, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import SeletctHabit from "../../Components/HabitPage/SelectHabit/SelectHabit";
import SelectFrequency from "../../Components/HabitPage/SelectFrequency/SelectFrequency";
import Notification from "../../Components/HabitPage/Notificatio/Notificatio";
import TimeDataPicker from "../../Components/HabitPage/TimeDataPicker/TimeDataPicker";


export default function HabitPage({ route }){
    const navegacao = useNavigation();
    const [habitInput, setHabitInput] = useState();
    const [frequencyInput, setFrequencyInput] = useState();
    const [notificationToggle, setNotificationToggle] = useState();
    const [dayNotification, setDayNotification] = useState();
    const [timeNotification, setTimeNotification] = useState();


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
                        <Text style={myStyle.inputText}>Hábito</Text>
                        <SeletctHabit habit={habit} habitInput={setHabitInput}/>
                        
                        <Text style={myStyle.inputText}>Frequência</Text>
                        <SelectFrequency habitFrequency={habit?.habitFrequency}
                        frequencyInput={setFrequencyInput}/>

                        {frequencyInput === "Mensal" ? null : (
                            <Notification
                            notificationToggle={notificationToggle}
                            setNotificationToggle={setNotificationToggle}
                        />
                        )}

                        {notificationToggle ? (
                            frequencyInput === "Mensal" ? null : (
                                <TimeDataPicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    timeNotification={timeNotification}
                                    setDayNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ) : null }        
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
        borderBottomColor: "#ffff",
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
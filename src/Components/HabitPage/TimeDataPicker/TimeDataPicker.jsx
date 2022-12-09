import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Image, Text, StyleSheet, Alert, TouchableOpacity, Platform } from "react-native";
import  DateTimePicker  from "@react-native-community/datetimepicker"
import { SelectList } from "react-native-dropdown-select-list";



export default function TimeDataPicker({
    frequency,
    dayNotification,
    timeNotification,
    setDayNotification,
    setTimeNotification,
}){
   const [date, setData] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [show, setShow] = useState(false);
   const [selected, setSelected] = useState("-");
   const [notificationDate, setNotificationDate] = useState();
   const [notificationTime, setNotificationTime] = useState();

   const onChange = (_,  selectDate ) => {
    const currentDate = selectDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let temDate = new Date(currentDate);
    const notificationHour = temDate.getHours().toString().padStart(2, "0");
    const notificationMin = temDate.getMinutes().toString().padStart(2, "0");
    let dateNotification;

    if(frequency === "Semanal"){
        dateNotification = selected;
    }
    const timeNotification = `${notificationHour} : ${notificationMin}`;

    setNotificationDate(dateNotification);
    setNotificationTime(timeNotification);

    if(frequency === "Diário"){
        setDayNotification(dateNotification);
    }else{
        setTimeNotification(timeNotification);
    }

    setTimeNotification(timeNotification);
   };

   const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);

    };

   const data = [
    { key: "Domingo" , value: "Dom"},
    { key: "Segunda" , value: "Seg"},
    { key: "Terça" , value: "Ter"},
    { key: "Quarta" , value: "Qua"},
    { key: "Quinta" , value: "Qui"},
    { key: "Sexta" , value: "Sex"},
    { key: "Sabado" , value: "Sab"},
   ];

   
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={myStyle.button} onPress={ () => showMode("time")}>
                <Text style={myStyle.buttonText}>Selecione a hora</Text>
            </TouchableOpacity>

            <View style={myStyle.textContainer}>
                {frequency != "7 dias" ?(
                    <Text style={myStyle.notificationText}>Dia do hábito: Diário</Text>
                ) : null}
                {frequency === "7 dias" ? (
                    <SelectList
                        data={data}
                        search={false}
                        setSelected={setSelected}
                        onChange={ () => {
                            onChange();
                        }}
                        placeholder={selected}
                        // boxStyles={boxStyles}
                        inputStyles={myStyle.inputStyle}
                        dropdownStyles={myStyle.dropdownStyles}
                        dropdownItemStyles={myStyle.dropdownItemStyles}
                        dropdownTextStyles={myStyle.dropdownTextStyles}
                        arrowicon={
                            <Image
                                source={require("../../../assets/icons/arrowDropdown.png")}
                                style={myStyle.arrow}
                            />
                        }
                    />
                    ) : null}
                    {frequency != "1 dia" ? (
                        <Text style={myStyle.notificationText}>Dia do hábito: {notificationDate}</Text>
                    ) : null}
                    <Text style={myStyle.notificationText}>Horário do hábito: {notificationTime}</Text>
            </View>
            {show &&(
                <DateTimePicker
                    testId="DateTimerPicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}


const myStyle = StyleSheet.create({
    container:{
        
    },
    button:{
        borderWidth: 1,
        borderColor: "#fafafa",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    buttonText:{
        color: "#fafafa",
        fontSize: 18,
        fontWeight: "bold",
    },
    textContainer:{
        marginVertical: 20,
    },
    notificationText:{
        color: "#fafafa",
        fontSize: 18,
    },

    boxStyles:{
        borderWidth: 1,
        borderColor: "#fafafa",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    inputStyle:{
        color: "#fafafa",
    },
    dropdownStyles:{
        borderWidth: 0,
    },
    dropdownItemStyles:{
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 10,
        marginBottom: 15,
    },
    dropdownTextStyles:{
        color: "#BBBBBB",
    },
    arrow:{
        width: 20,
        height: 20,
    },

});
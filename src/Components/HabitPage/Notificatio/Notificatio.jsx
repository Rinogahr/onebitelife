import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text, Switch } from "react-native";

export default function Notification({
    notificationToggle,
    setNotificationToggle,
}){
    const toggleSwitch = () => {
        setNotificationToggle( ( previousState ) => !previousState)
    }

    return(
        <View style={myStyle.container}>
            <Text style={myStyle.title}>Notificação</Text>
            <Switch
                trackColor={{ false: "#FF0044", true: "#2DBE56"}}
                thumbColor={"#FAFAFA"}
                ios_backgroundColor="#3E3E3E"
                onValueChange={toggleSwitch}
                value={notificationToggle}
            />
        </View>
    );
}

const myStyle = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20,
    },
    titleDisabled:{
        color: "#BBB",
        fontSize: 20,
        marginRight: 10,
    },
    title:{
        color: "#FAFAFA",
        fontSize: 20,
        marginRight: 10,
    }
});
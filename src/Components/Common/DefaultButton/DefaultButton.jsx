import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height,
}){
    return(
        <TouchableOpacity
            style={[myStyle.button, {width: width, height: height}]}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={myStyle.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const myStyle = StyleSheet.create({
    button:{
        // width: width,
        // height: height,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        borderColor: "#fafafa",
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: "#FC2E7D",
    },
    buttonText:{
        color:  "#fafafa",
        fontWeight: "bold",
        fontSize: 20,
    }
});
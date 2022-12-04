import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { SelectList, } from "react-native-dropdown-select-list";
import data from "../../../Database/FrequencyData";

export default function SelectFrequency({habitFrequency, frequencyInput}){
    const [selected, setSelected] = useState( habitFrequency ? habitFrequency : "-" );
    const [frequencyData, setFrequencyData] = useState();

    useEffect( () => {
        setFrequencyData(data.data);
        frequencyInput(frequencyData ? frequencyData : undefined);
    }, []);

    return(
        <View style={{marginBottom: 20}}>
            <SelectList
                setSelected={setSelected}
                data={frequencyData}
                search={false}
                onSelect={ () => {
                    frequencyInput(selected);
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
        </View>
    );
}

const myStyle = StyleSheet.create({
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
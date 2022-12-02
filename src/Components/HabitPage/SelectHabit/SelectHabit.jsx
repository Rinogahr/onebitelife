import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet } from "react-native";
import { SelectList, } from "react-native-dropdown-select-list";

import HabitsData from "../../../Database/HabitsData";

export default function SeletctHabit({habit, habitInput}){
    const [selected, setSelected] = useState( habit?.habitName ? habit?.habitName : "-" );
    const [data, setData] = useState();

    useEffect( () => {
        if(habit?.habitArea === "Mente"){
            setData(HabitsData.dataMind);
        }
        if(habit?.habitArea === "Financeiro"){
            setData(HabitsData.dataMoney);
        }
        if(habit?.habitArea === "Corpo"){
            setData(HabitsData.dataBody);
        }
        if(habit?.habitArea === "Humor"){
            setData(HabitsData.dataFun);
        }habitInput(habit?.habiName ? habit?.habitName : undefined);
    }, []);

    return(
        <View>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={ () => {
                    habitInput(selected);
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
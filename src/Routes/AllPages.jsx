import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start/Start";
import AppExplanation from "../Pages/AppExplanation/AppExplanation";
import Home from "../Pages/Home/Home";
import HabitPage from "../Pages/HabitPage/HabitPage";

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Start" component={Start}/>
                <Stack.Screen name="AppExplanation" component={AppExplanation}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="HabitPage" component={HabitPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
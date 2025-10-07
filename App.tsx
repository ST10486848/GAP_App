import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import styles from "./src/styles/Styles";

// Import your new pages here:
import HomePage from "./src/screens/HomePage";

import FirstAid from "./src/screens/Functions/FirstAid";
import Sewing from "./src/screens/Functions/Sewing";
import Landscaping from "./src/screens/Functions/Landscaping";
import LifeSkills from "./src/screens/Functions/Lifeskills";
import ChildMinding from "./src/screens/Functions/ChildMinding";
import Cooking from "./src/screens/Functions/Cooking";
import GardenMaintenance from "./src/screens/Functions/GardenMaintenace";

const Stack = createStackNavigator();
//This is the data structure that holds the courses offered by the organization

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="FirstAid" component={FirstAid} />
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen name="Landscaping" component={Landscaping} />
        <Stack.Screen name="LifeSkills" component={LifeSkills} />
        <Stack.Screen name="ChildMinding" component={ChildMinding} />
        <Stack.Screen name="Cooking" component={Cooking} />
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //<Image
 // source={require("./assets/Logo.png")}
  //style={{ width: 300, height: 300 }} 
///>;

}

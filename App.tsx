import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 
import styles from "./src/styles/Styles";

// Import your new pages here:
import HomePage from "./src/screens/HomePage";

import FirstAid from "./src/screens/Functions/FirstAid";
import Sewing from "./src/screens/Page/Sewing";
import Landscaping from "./src/screens/Page/Landscaping";
import LifeSkills from "./src/screens/Page/Lifeskills";
import ChildMinding from "./src/screens/Page/ChildMinding";
import Cooking from "./src/screens/Page/Cooking";
import GardenMaintenance from "./src/screens/Functions/GardenMaintenace";
import Cart from "./src/screens/Functions/Cart"
import ContactDetails from "./src/screens/Functions/ContactDetails"; 

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
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="ContactDetails" component={ContactDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  //<Image
 // source={require("./assets/Logo.png")}
  //style={{ width: 300, height: 300 }} 
 
///>;

}

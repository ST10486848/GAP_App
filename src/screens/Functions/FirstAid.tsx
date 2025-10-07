import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import styles from "../../styles/Styles";

export default function FirstAid({ navigation }: { navigation: any }) {
  return (
  <ScrollView>
    <View style={styles.coursesButtons}>
      <TouchableOpacity style={styles.courseItem}>
        <Text>First Aid</Text>{/*style={styles.courseName}styling for later*/}
        <Text>Fees:R1500</Text>{/*style={styles.courseFees}styling for later*/}
        <Text>Purpose: To provide first aid awareness and basic life support.</Text>{/*style={styles.coursePurpose}styling for later*/}
        <Text> Content: 
           <Text>• Wounds and bleeding </Text>
           <Text>• Burns and fractures</Text> 
           <Text>• Emergency scene management</Text>
           <Text>• Cardio-Pulmonary Resusitation (CPR)</Text>
           <Text>• Respiratory distress e.g, Choking,blocked airway</Text>
        </Text>{/*style={styles.courseContent}styling for later*/}  
      </TouchableOpacity>
       <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text> 
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
} 
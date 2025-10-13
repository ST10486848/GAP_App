import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function LifeSkills({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Life Skills</Text>
        <Text>Fees:R1500</Text>
        <Text>Purpose:To provide  life skills to navigate basic life necessities </Text>
        <Text>Content:
          <Text>• Opening a bank account</Text>
          <Text>• Basic labour law(know your rights)</Text>
          <Text>• Basic reading and writing literacy</Text>
          <Text>• Basic numeric literacy</Text>
        </Text>
       </TouchableOpacity>
      <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
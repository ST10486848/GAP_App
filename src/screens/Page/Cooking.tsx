import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function Cooking({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Cooking</Text>
        <Text>Fees:R750</Text>
        <Text>Purpose:To provide and cook nutritious family meals</Text>
        <Text>Content:
          <Text>• Nutritional requirements for a healthy body</Text>
          <Text>• Type of protein, carbohydrates and vegetables</Text>
          <Text>• Tasty and nutritious recipes</Text>
          <Text>• Preparations and cooking of meals </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
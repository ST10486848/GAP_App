import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function GardenMaintenance({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Garden Maintenance</Text>
        <Text>Fees:R750</Text>
        <Text>Purpose:To provide basic knowledge of watering, pruning and planting in a domestic garden</Text>
        <Text>Content:
          <Text>• Water restrictions and the watering requirements of indegenous and exotic plants</Text>
          <Text>• Pruning and propagation of plants</Text>
          <Text>• Planting techniques for different plant types</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
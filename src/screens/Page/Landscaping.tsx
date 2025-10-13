import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function Landscaping({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Landscaping</Text>
        <Text>Fees:R1500</Text>
        <Text>Purpose:To provide landscaping services for new and establishing gardens</Text>
        <Text>Content:
          <Text>• Indegenous and exotic plants and trees</Text>
          <Text>• Fixed sturctures (fountains, statues,benches,tables,built-in braai)</Text>
          <Text>• Balancing of plants and trees in a garden</Text>
          <Text>• Aesthetics  of plant shapes and colours</Text>
          <Text>• Garden layout</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function Sewing({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Sewing</Text>
        <Text>Fees:1500R</Text>
        <Text>Purpose:To provide alterations and new garments tailoring services</Text>
        <Text>Content:
        <Text>• Types of stiches </Text>
        <Text>• Threading a sewing machine</Text>
        <Text>• Sewing buttons, zips,herms and seams</Text>
        <Text>• Alterations</Text>
        <Text>• Designing and sewing new garments</Text>
        </Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
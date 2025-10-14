import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function GardenMaintenance({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Garden Maintenance</Text>
      </TouchableOpacity>
    </View>
  );
}
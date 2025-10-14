import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../styles/Styles";

export default function ContactDetails({ navigation }: { navigation: any }) {
  return(
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.sectionTitle}>Contact Details</Text>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.courseContent}>GAP Training Centre, 123 Main Street, Cityville, Country</Text>
        <Text style={styles.sectionTitle}>Phone</Text>
        <Text style={styles.courseContent}>+27 123 456 7890</Text>
        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.courseContent}>
      </View>
    </ScrollView>
  )
}

  
       
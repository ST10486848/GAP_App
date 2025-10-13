import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/Styles";

export default function ChildMinding({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Child Minding</Text>
        <Text>Fees:R750</Text>
        <Text>Purpose:To provide basic child and baby care </Text>
        <Text>Content:
          <Text>• Birth to six-month old baby needs</Text>
          <Text>• Seven-month to one year old needs</Text>
          <Text>• Toddler needs</Text>
          <Text>• Educational toys</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AddButton}>{/* onPress={AddToCart}*/}
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

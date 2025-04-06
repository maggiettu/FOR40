import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Yogurt</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Butter</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Cheese String</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Avocados</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Bananas</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Lettuce</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Eggs</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Ground Beef</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Pork Belly</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Tofu</Text>
          <Image source={require("../assets/checkmark.png")} style={styles.checkmark} />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Return to home page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  checkmark: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#ff5a5f",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
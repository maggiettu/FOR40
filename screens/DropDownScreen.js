import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


export default function DropDownScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.title}>What are you craving today?</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fresh Produce</Text>
        <View style={styles.item}>
          <Image source={require("../assets/avocado.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Avocados</Text>
        </View>
        <View style={styles.item}>
          <Image source={require("../assets/banana.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Bananas</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Protein</Text>
        <View style={styles.item}>
          <Image source={require("../assets/eggs.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Eggs</Text>
        </View>
        <View style={styles.item}>
          <Image source={require("../assets/chicken.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Chicken Breast</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dairy</Text>
        <View style={styles.item}>
          <Image source={require("../assets/milk.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Milk</Text>
        </View>
        <View style={styles.item}>
          <Image source={require("../assets/yogurt.jpg")} style={styles.itemImage} />
          <Text style={styles.itemText}>Yogurt</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ChooseItemsScreen")}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>


      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseItemsScreen")}>
            <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("DropDown")}>
            <Text style={styles.navIcon}>🛒</Text>
        </TouchableOpacity>

        <Text style={styles.navIcon}>💬</Text>
        <Text style={styles.navIcon}>👥</Text>
        </View>     

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
    alignText: "center",
  },
  logo: {
    width: 100,
    height: 50,
    margin: 10, 
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff5a5f",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ffe5e5",
    borderTopWidth: 1,
    borderTopColor: "#ffcccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navIcon: {
    fontSize: 30,
    color: "#ff5a5f",
    marginBottom: 20,
  },
});
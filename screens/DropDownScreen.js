import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function DropDownScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const handleItemPress = (itemName) => {
    console.log(`${itemName} selected!`);
    setSelectedItem(itemName); // Update selected item
    // You can navigate to another screen or perform any action here
    // Example: navigation.navigate("ItemDetails", { item: itemName });
  };

  const getItemStyle = (itemName) => {
    return itemName === selectedItem ? [styles.item, styles.selectedItem] : styles.item;
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo and title */}
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>What are you craving today?</Text>

        {/* Fresh Produce */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fresh Produce</Text>
          <TouchableOpacity
            style={getItemStyle("Avocados")}
            onPress={() => handleItemPress("Avocados")}
          >
            <Image
              source={require("../assets/avocado.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Avocados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getItemStyle("Bananas")}
            onPress={() => handleItemPress("Bananas")}
          >
            <Image
              source={require("../assets/banana.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Bananas</Text>
          </TouchableOpacity>
        </View>

        {/* Protein */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Protein</Text>
          <TouchableOpacity
            style={getItemStyle("Eggs")}
            onPress={() => handleItemPress("Eggs")}
          >
            <Image
              source={require("../assets/eggs.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getItemStyle("Chicken Breast")}
            onPress={() => handleItemPress("Chicken Breast")}
          >
            <Image
              source={require("../assets/chicken.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Chicken Breast</Text>
          </TouchableOpacity>
        </View>

        {/* Dairy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dairy</Text>
          <TouchableOpacity
            style={getItemStyle("Milk")}
            onPress={() => handleItemPress("Milk")}
          >
            <Image
              source={require("../assets/milk.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Milk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getItemStyle("Yogurt")}
            onPress={() => handleItemPress("Yogurt")}
          >
            <Image
              source={require("../assets/yogurt.jpg")}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Yogurt</Text>
          </TouchableOpacity>
        </View>

        {/* Add Item Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChooseItemsScreen")}
        >
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChooseItemsScreen")}
        >
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("DropDown")}>
          <Text style={styles.navIcon}>🛒</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MatchScreen")}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df",
    padding: 20,
    position: "relative",
  },
  scrollContent: {
    paddingBottom: 70, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff", 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  selectedItem: {
    backgroundColor: "#ffd6d6", 
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
    width: "118%",
  },
  navIcon: {
    fontSize: 30,
    color: "#ff5a5f",
    marginBottom: 20,
  },
});

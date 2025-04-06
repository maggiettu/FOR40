import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


export default function DropDownScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you craving today?</Text>
      <Image source={require("../assets/icon.png")} style={styles.logo} />

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

      
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Drop Down" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Drop Down Screen</Text>
        </View> */}
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
    alignSelf: "flex-center",
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
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
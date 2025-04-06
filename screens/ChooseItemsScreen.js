import React, { useState } from "react";
import {
 View,
 Text,
 TouchableOpacity,
 TextInput,
 StyleSheet,
} from "react-native";


export default function ChooseItemsScreen({ navigation }) {
 const [selectedNumber, setSelectedNumber] = useState("");


 return (
   <View style={styles.container}>
     <Text style={styles.title}>What item do you want to buy?</Text>


     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("DropDown")}
     >
       <Text style={styles.buttonText}>Choose your items</Text>
     </TouchableOpacity>


     <Text style={styles.title}>
       How many people would you like to share with?
     </Text>


   
     <TextInput
       style={styles.input}
       placeholder="Choose your number"
       placeholderTextColor="#555"
       keyboardType="numeric"
       value={selectedNumber}
       onChangeText={setSelectedNumber}
     />


     <TouchableOpacity
       style={styles.button}
       onPress={() => navigation.navigate("ShoppingCartConfirmation")}
     >
       <Text style={styles.buttonText}>Submit your request</Text>
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
   alignItems: "center",
   justifyContent: "flex-start",
 },
 title: {
   fontSize: 24,
   fontWeight: "bold",
   marginBottom: 10,
   textAlign: "center",
 },
 button: {
   width: "70%",
   backgroundColor: "#ff5a5f",
   padding: 16,
   borderRadius: 10,
   alignItems: "center",
   marginVertical: 20,
 },
 buttonText: {
   color: "#fff",
   fontSize: 18,
   fontWeight: "bold",
 },
 input: {
   backgroundColor: "#fff",
   width: "100%",
   height: 50,
   borderRadius: 10,
   paddingHorizontal: 15,
   fontSize: 16,
   marginBottom: 20,
   color: "#000",
 },
 navBar: {
    flexDirection: "row",
    justifyContent: "space-evenly", // More even spacing
    alignItems: "center",           // Vertically center icons
    paddingVertical: 10,
    backgroundColor: "#ffe5e5",
    borderTopWidth: 1,
    borderTopColor: "#ffcccc",
    position: "absolute",
    bottom: 0,
    left: 0,                        // ensure it's truly full width
    right: 0,
  },
  navIcon: {
    fontSize: 30,
    color: "#ff5a5f",
    marginBottom: 20,
  },
});

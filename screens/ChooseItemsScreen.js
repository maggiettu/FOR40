// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image, Picker } from "react-native";

// export default function ChooseItemsScreen({ navigation }) {
//   const [selectedNumber, setSelectedNumber] = useState("1");

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>What item do you want to buy?</Text>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DropDown")}>
//         <Text style={styles.buttonText}>Choose your items</Text>
//       </TouchableOpacity>

//       <Text style={styles.title}>How many people would you like to share with?</Text>
//       <Picker
//         selectedValue={selectedNumber}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedNumber(itemValue)}
//       >
//         <Picker.Item label="1" value="1" />
//         <Picker.Item label="2" value="2" />
//         <Picker.Item label="3" value="3" />
//         <Picker.Item label="4" value="4" />
//       </Picker>

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
//         <Text style={styles.buttonText}>Submit your request</Text>
//       </TouchableOpacity>
// {/* 
//       <View style={styles.navBar}>
//         <TouchableOpacity>
//           <Image source={require("../assets/home.png")} style={styles.navIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={require("../assets/cart.png")} style={styles.navIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={require("../assets/chat.png")} style={styles.navIcon} />
//         </TouchableOpacity>
//        >
//           <Image source={require("../assets/profile.png")} style={styles.navIcon} />
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#faf1df",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "#ff5a5f",
//     padding: 16,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   picker: {
//     height: 50,
//     width: "100%",
//     marginBottom: 20,
//   },
//   navBar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
// });
import React, { useState } from "react"; // Import useState
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { Picker } from '@react-native-picker/picker';

export default function ChooseItemsScreen({ navigation }) {
  const [selectedNumber, setSelectedNumber] = useState("1");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What item do you want to buy?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DropDown")}>
        <Text style={styles.buttonText}>Choose your items</Text>
      </TouchableOpacity>

      <Text style={styles.title}>How many people would you like to share with?</Text>
      {/* <Picker
        selectedValue={selectedNumber}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedNumber(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
      </Picker> */}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ShoppingCartConfirmation")}>
        <Text style={styles.buttonText}>Submit your request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf1df",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    width: "70%",
    backgroundColor: "#ff5a5f",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
});
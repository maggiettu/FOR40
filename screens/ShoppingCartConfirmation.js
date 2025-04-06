import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { Home, ShoppingCart, MessageSquare, User } from "lucide-react-native"; // use lucide-react-native instead


export default function ShoppingCartConfirmation() {
   const navigation = useNavigation();
  
 return (
   <View style={styles.container}>
     {/* Header */}
     <View style={styles.header}>
     <Image source={require("../assets/icon.png")} style={styles.logo} />
     </View>


     {/* Main Content */}
     <View style={styles.main}>
       <Text style={styles.title}>You have successfully matched!</Text>
       <Image
         source={require("../assets/unicorn.png")}
         style={styles.image}
       />


       <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate("DropDownScreen")}
       >
         <Text style={styles.buttonText}>Continue Shopping</Text>
       </TouchableOpacity>


       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>View Cart</Text>
       </TouchableOpacity>
     </View>


   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#faf1df",
   justifyContent: "space-between",
 },
 header: {
   flexDirection: "row",
   padding: 20,
   alignItems: "center",
 },
 logo: {
   fontSize: 24,
   color: "red",
   marginBottom: 0,
 },
 brand: {
   fontSize: 24,
   fontWeight: "bold",
   marginLeft: 8,
 },
 main: {
   alignItems: "center",
   justifyContent: "center",
   padding: 20,
 },
 title: {
   fontSize: 28,
   fontWeight: "900",
   marginBottom: 20,
   textAlign: "center",
 },
 image: {
   width: 160,
   height: 160,
   resizeMode: "contain",
   marginBottom: 20,
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
});

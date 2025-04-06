import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


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

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MatchScreen")}>
         <Text style={styles.buttonText}>See your matches</Text>
       </TouchableOpacity>

     </View>


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
 },
 header: {
   flexDirection: "row",
   padding: 20,
   alignItems: "center",
 },
 logo: {
   width: 100,
   height: 50,
   margin: 10, 
   marginBottom: 30,
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

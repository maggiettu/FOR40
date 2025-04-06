import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ProgressBarAndroid,
  Dimensions,
  Image,
  Linking,
} from "react-native";

const handleJoinPress = () => {
    Linking.openURL("https://www.foodstash.ca/");
  };

export default function ChooseItemsScreen({ navigation }) {
  const [selectedNumber, setSelectedNumber] = useState("");
  const totalItemsTraded = 12;
  const progress = 0.6;

  
  return (
    <View style={styles.screen}>
        <View style={styles.header}>
            <Image source={require("../assets/icon.png")} style={styles.logo} />
            <TouchableOpacity style={styles.profileContainer}>
                <Image source={require("../assets/gianna.png")} style={styles.profileImage} />
            </TouchableOpacity>
            </View>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
        <Text style={styles.bigTitle}>~ Welcome back ~</Text>
          {/* Dashboard */}
          <View style={styles.dashboard}>
            <Text style={styles.dashboardTitle}>
              🎉 You've traded {totalItemsTraded} food items!
            </Text>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
            </View>
            <Text style={styles.dashboardSubtitle}>
              ✅ We’ve matched your donations with Food Stash to reduce food insecurity!
            </Text>
            <TouchableOpacity style={styles.joinButton} onPress={handleJoinPress}>
            <Text style={styles.buttonText}>Our mission</Text>
        </TouchableOpacity>
          </View>

          {/* Request Form */}
          <Text style={styles.mediumTitle}>Request a new item</Text>
          <View style={styles.dashboard}>
            <Text style={styles.dashboardTitle}>What item do you want to buy?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("DropDown")}
            >
                <Text style={styles.buttonText}>Choose your items</Text>
            </TouchableOpacity>

            <Text style={styles.dashboardTitle}>How many people would you like to share with?</Text>
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
          </View>

          {/* Bottom padding so content doesn't hide behind navbar */}
          <View style={{ height: 80 }} />
        </View>
      </ScrollView>

      {/* Fixed Navbar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseItemsScreen")}>
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
  screen: {
    flex: 1,
    backgroundColor: "#faf1df",
  },
  logo: {
    width: 100,
    height: 50,
    margin: 10, 
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  scrollContainer: {
    paddingBottom: 100, // ensure scroll content doesn't overlap navbar
  },
  bigTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  mediumTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:50,
    marginBottom: 30,
  },
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dashboard: {
    backgroundColor: "#ffe5e5",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ff5a5f",
    textAlign: "center",
  },
  dashboardSubtitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "#444",
  },
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#faf1df', // background of the bar
    borderRadius: 10,
    borderWidth: 2, // <- this adds the outline
    borderColor: '#ff5a5f', // color of the outline
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#ff5a5f', // fill color
  },
  joinButton: {
    backgroundColor: "#ff5a5f",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
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
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#ffe5e5",
    borderTopWidth: 1,
    borderTopColor: "#ffcccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    zIndex: 10,
  },
  navIcon: {
    fontSize: 30,
    color: "#ff5a5f",
  },
});

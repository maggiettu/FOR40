import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Linking } from "react-native";

const handleJoinPress = () => {
    Linking.openURL("https://www.foodstash.ca/");
  };

export default function MatchDetailScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.checkmark}>✔️</Text>
        <Text style={styles.title}>You have matched with Selina!</Text>

        {/* Match Card */}
        <View style={styles.card}>
          <Image
            source={require("../assets/selina.png")}
            style={styles.avatar}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Selina</Text>
            <Text style={styles.description}>
              Hello! I am a first year UBC student and I would love to connect
              with you to share a pack of grapes!
            </Text>
          </View>
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact info:</Text>
          <Text style={styles.handle}>@ubcstudent123</Text>
          <TouchableOpacity style={styles.instagramButton}>
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        {/* Specific Requests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specific Requests:</Text>
          <Text style={styles.requestText}>
            I prefer green grapes over red grapes, so it would be appreciated if you got those. Thank you!
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.title}>THANK YOU FOR USING FOR40!</Text>
          <Text style={styles.requestText}>Have food at home that might go bad soon? Contact Food Stash!</Text>
          <TouchableOpacity style={styles.joinButton} onPress={handleJoinPress}>
            <Text style={styles.buttonText}>Join the Cause</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

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
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 50,
    margin: 10
  },
  scrollContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  checkmark: {
    fontSize: 50,
    alignSelf: "center",
    color: "#ff5a5f",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f4a5a5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#333",
    
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    
    textAlign: "center",
  },
  handle: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  instagramButton: {
    backgroundColor: "#ff5a5f",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    
  },
  requestText: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  joinButton: {
    backgroundColor: "#ff5a5f",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
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

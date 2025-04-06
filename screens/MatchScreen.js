import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const matches = {
  topMatches: [
    {
      name: "Selina",
      match: "97%",
      color: "#f4a5a5",
    },
    {
      name: "Claire",
      match: "94%",
      color: "#f08080",
    },
  ],
  otherMatches: [
    {
      name: "Gianna",
      match: "90%",
      color: "#f4a5a5",
    },
    {
      name: "Maggie",
      match: "85%",
      color: "#f08080",
    },
  ],
};

export default function MatchScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.checkmark}>✔️</Text>
        <Text style={styles.title}>SUCCESS! You have been matched with other students!</Text>

        {/* Top Matches */}
        <Text style={styles.sectionTitle}>Top matches:</Text>
        {matches.topMatches.map((match, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: match.color }]}
            onPress={() => navigation.navigate("MatchDetailScreen")}
          >
            <Image
              source={require("../assets/selina.png")}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{match.name} ({match.match} match)</Text>
              <Text style={styles.description}>
                Hello! I am a first year UBC student and I would love to connect with you to share a pack of carrots!
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Other Matches */}
        <Text style={styles.sectionTitle}>Other matches:</Text>
        {matches.otherMatches.map((match, index) => (
          <View key={index} style={[styles.card, { backgroundColor: match.color }]}>
            <Image
              source={require("../assets/claire.png")}
              style={styles.avatar}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{match.name} ({match.match} match)</Text>
              <Text style={styles.description}>
                Hello! I am a first year UBC student and I would love to connect with you to share a pack of carrots!
              </Text>
            </View>
          </View>
        ))}
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
  },
  logo: {
    width: 100,
    height: 50,
    margin: 10
  },
  scrollContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  checkmark: {
    fontSize: 50,
    alignSelf: "center",
    marginBottom: 10,
    color: "#ff5a5f",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
  },
  card: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
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
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#333",
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
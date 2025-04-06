import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DropDownScreen from "./screens/DropDownScreen";
import CartScreen from "./screens/CartScreen";
import ChooseItemsScreen from "./screens/ChooseItemsScreen";
import WaitingForMatchesScreen from "./screens/WaitingForMatchesScreen"; 
import ShoppingCartConfirmation from "./screens/ShoppingCartConfirmation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Home" }}
        />
        <Stack.Screen
          name="DropDown"
          component={DropDownScreen}
          options={{ headerTitle: "Select Your Item" }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerTitle: "Cart" }}
        />
        <Stack.Screen
          name="ChooseItemsScreen"
          component={ChooseItemsScreen}
          options={{ headerTitle: "Choose Your Request" }}
        />
        <Stack.Screen
          name="WaitingForMatchesScreen"
          component={WaitingForMatchesScreen}
          options={{ headerTitle: "Waiting For Matches..." }}
        />
        <Stack.Screen
          name="ShoppingCartConfirmation"
          component={ShoppingCartConfirmation}
          options={{ headerTitle: "Success!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";
import MessagesScreen from "../MessagesScreen";
import { COLORS } from "../../tools/contants";

const Tab = createBottomTabNavigator();
const TabMaterial = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: "#f2f2f2",
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarLabel: "Acceuil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Réglages"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Réglages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
          tabBarBadge: 3,
          // tabBarBadgeStyle: {
          //   backgroundColor: COLORS.secondary,
          //   color: "#fff",
          //   borderWidth: 1,
          //   borderColor: COLORS.secondary,
          // },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

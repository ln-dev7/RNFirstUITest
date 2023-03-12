import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/HomeScreen";
import BottomTabs from "../screens/tabs";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import { countUnreadChats } from "../data/chats";
import AllProjectsScreen from "../screens/AllProjectsScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="BottmTabs"
          component={BottomTabs}
          options={{
            //title: "Acceuil",
            headerStyle: {
              // backgroundColor: "#f4511e",
            },
            // headerTintColor: "#fff",
            headerTitleStyle: {
              // fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ChatDetail"
          component={ChatDetailScreen}
          options={{
            headerBackTitle: `${countUnreadChats}`,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="AllProjects"
          component={AllProjectsScreen}
          options={{
            headerBackTitle: "Tous mes projets",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

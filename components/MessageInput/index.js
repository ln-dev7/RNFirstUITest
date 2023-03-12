import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../tools/contants";

export default function MessageInput() {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={53}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 50,
          paddingTop: 10,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
          backgroundColor: "#F1F1F1",
          // position: "absolute",
          // bottom: 0,
          //flex: 1,
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Type a message ..."
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: 20,
            padding: 10,
            flex: 1,
            marginRight: 10,
            borderWidth: 1,
            backgroundColor: "#fff",
            borderColor: "#e0e0e0",
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 600 }}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

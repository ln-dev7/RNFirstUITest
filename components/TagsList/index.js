import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../tools/contants";
import React from "react";

const TagsList = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "column",
        margin: 1,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          color: COLORS.primary,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TagsList;

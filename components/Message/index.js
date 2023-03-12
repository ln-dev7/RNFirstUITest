import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import { COLORS } from "../../tools/contants";

const Message = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "column",
        padding: 12,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: item.user.id === 1 ? "#DCF7C5" : "#fff",
        maxWidth: "80%",
        alignSelf: item.user.id === 1 ? "flex-end" : "flex-start",
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        {item.message}
      </Text>
      <Text
        style={{ color: "#888", fontSize: 12, marginTop: 3, fontWeight: 600 }}
      >
        {moment(item.createdAt).format("LT")}
      </Text>
    </View>
  );
};

export default Message;

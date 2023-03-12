import {
  View,
  Text,
  Image,
  Pressable,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import moment from "moment";
import { COLORS } from "../../tools/contants";

const ChatsList = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        backgroundColor: COLORS.white,
        marginHorizontal: 10,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 55, height: 55, borderRadius: 27.5 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          gap: 5,
          height: "100%",
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 1,
            flex: 1,
            height: "100%",
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: 600, color: COLORS.secondary }}
          >
            {item.fullName}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: COLORS.gray,
            }}
          >
            {item.lastMessage}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 5,
          }}
        >
          <Text
            style={{
              color:
                item.numberUnreadMessages > 0 ? COLORS.primary : COLORS.gray,
              fontWeight: 500,
            }}
          >
            {moment(item.date).format("LT")}
            {/* {moment(item.date).fromNow(true)} */}
          </Text>
          {item.numberUnreadMessages > 0 && (
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {item.numberUnreadMessages}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatsList;

import { View, Text, Image, Pressable, Linking } from "react-native";
import React from "react";
import { COLORS } from "../../tools/contants";

const ProjectsList = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#e1e1e1",

        shadowColor: COLORS.gray,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Image
        style={{
          width: 120,
          height: "100%",
        }}
        source={item.image}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 8,
          flex: 1,
          height: "100%",
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: COLORS.secondary,
          }}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            color: COLORS.gray,
            lineHeight: 16,
          }}
        >
          {item.description}
        </Text>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 15,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => Linking.openURL(item.link)}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: COLORS.white,
            }}
          >
            View Project
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProjectsList;

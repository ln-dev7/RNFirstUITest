import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Pressable,
} from "react-native";
import { COLORS } from "../../tools/contants";
import React from "react";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./../../assets/images/lndev.png")}
          style={{ width: 65, height: 65, borderRadius: 10 }}
        />
        {/* create a similar of div */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 3,
            flex: 1,
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>LN Dev</Text>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.gray,
              fontStyle: "italic",
            }}
          >
            FrontEnd Developer
          </Text>
        </View>
        <View>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 4,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              Contact me
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  header: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default HomeScreen;

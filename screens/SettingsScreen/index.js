import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { COLORS } from "../../tools/contants";
import React from "react";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
          source={require("./../../assets/images/lndev.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        {/* create a similar of div */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
              paddingVertical: 14,
              paddingHorizontal: 42,
              borderRadius: 30,
              backgroundColor: COLORS.primary,
            }}
            onPress={() => Linking.openURL("http://lndev.me")}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              Mon site
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
});

export default SettingsScreen;

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../tools/contants";
import React from "react";
import { Projects } from "../../data/projects";
import { Tags } from "../../data/tags";

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
              borderRadius: 30,
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
              Visit Website
            </Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        style={styles.tagsList}
        data={Tags}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
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
        )}
      />
      {/* <FlatList
        style={styles.projectstList}
        data={Projects}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              margin: 1,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              width: 200,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: "50%",
              }}
              source={item.image}
            />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      /> */}
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
  tagsList: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
  },
  projectstList: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default HomeScreen;

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
  Linking,
} from "react-native";
import { COLORS } from "../../tools/contants";
import React from "react";
import { Projects } from "../../data/projects";
import { Tags } from "../../data/tags";
import TagsList from "../../components/TagsList";
import ProjectsList from "../../components/ProjectsList";
import { Link } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
              backgroundColor: COLORS.secondary,
            }}
            onPress={() => Linking.openURL("http://lndev.me")}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              Mon site
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
        renderItem={({ item }) => <TagsList item={item} />}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: COLORS.secondary,
          }}
        >
          Mes projets
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AllProjects", { Projects: Projects })
          }
        >
          <Text
            style={{
              fontSize: 15,
              color: COLORS.primary,
              fontStyle: "italic",
            }}
          >
            Afficher tout
          </Text>
        </TouchableOpacity>
      </View>
      <View styl={styles.projectstList}>
        {[...Projects].slice(0, 5).map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              flex: 1,
              flexDirection: "column",
              marginVertical: 5,
              marginHorizontal: 10,
            }}
          >
            <ProjectsList item={item} />
          </TouchableOpacity>
        ))}
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
  tagsList: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
  },
  projectstList: {},
});

export default HomeScreen;

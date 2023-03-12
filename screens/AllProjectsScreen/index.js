import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import ProjectsList from "../../components/ProjectsList";
import { COLORS } from "../../tools/contants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AllProjectsScreen = ({
  route: {
    params: { Projects },
  },
  navigation: { setOptions },
}) => {
  useEffect(() => {
    setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: 1,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: COLORS.secondary,
            }}
          >
            Tout mes projets
          </Text>
        </View>
      ),
      headerRight: () => (
        <MaterialCommunityIcons name="fire" color={COLORS.primary} size={30} />
      ),
    });
  }, []);
  return (
    <ScrollView
      style={{
        padding: 10,
        flexDirection: "column",
        gap: 10,
        flex: 1,
      }}
    >
      {Projects.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={{
            flexDirection: "column",
            marginVertical: 5,
          }}
        >
          <ProjectsList item={item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AllProjectsScreen;

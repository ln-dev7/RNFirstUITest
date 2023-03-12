import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ProjectsList from "../../components/ProjectsList";

const AllProjectsScreen = ({
  route: {
    params: { Projects },
  },
}) => {
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

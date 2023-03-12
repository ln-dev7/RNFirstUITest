import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import moment from "moment";
import { COLORS } from "../../tools/contants";
import { Conversations } from "../../data/conversations";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Message from "../../components/Message";
import MessageInput from "../../components/MessageInput";

const ChatDetailScreen = ({
  route: {
    params: { item },
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
            {item.fullName}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: COLORS.gray,
            }}
          >
            {moment(item.date).toNow()}
          </Text>
        </View>
      ),
      headerRight: () => (
        <Image
          source={{ uri: item.image }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      ),
    });
  }, []);
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaper.dog/large/20525628.jpg",
      }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          //paddingBottom: 95,
        }}
      >
        <FlatList
          data={Conversations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Message item={item} />}
        />
        <MessageInput />
      </View>
    </ImageBackground>
  );
};

export default ChatDetailScreen;

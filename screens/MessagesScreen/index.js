import { View, Text, FlatList } from "react-native";
import { COLORS } from "../../tools/contants";
import { Chats } from "../../data/chats";
import React, { useState, useEffect } from "react";
import ChatsList from "../../components/ChatsList";

const MessagesScreen = ({ navigation }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChatsList item={item} navigation={navigation} />
      )}
      style={{
        backgroundColor: COLORS.white,
      }}
    />
  );
};

export default MessagesScreen;

import React, { useLayoutEffect } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { withExpoSnack } from "nativewind";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Home",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <StatusBar hidden={false} animated />
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <View className>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">deliver now </Text>
          <Text className="font-bold text-lg items-baseline justify-center">
            Current Loction
            <Ionicons name="chevron-down-sharp" size={20} color="#00ccbb" />
          </Text>
        </View>
        <AntDesign name="user" size={35} color="#00ccbb" />
      </View>
      {/* end header */}
      {/* Search */}
      <View className="flex-row items-center space-x-5 pb-2 mx-4 pr-2">
        <View className="flex-row flex-1 space-x-2 p-3 bg-gray-300 rounded-md items-center">
          <Ionicons name="ios-search-outline" size={20} color="#00ccbb" />
          <TextInput placeholder="Search ... " keyboardAppearance="default" />
        </View>
        <Ionicons name="ios-funnel-outline" size={20} color="#00ccbb" />
      </View>
    </SafeAreaView>
  );
};

export default withExpoSnack(HomeScreen);

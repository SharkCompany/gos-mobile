import MainButton from "components/MainButton";
import { Text, View } from "components/Themed";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { HomeScreenProps } from "types";

type Props = {};

function RideDetail({ navigation }: HomeScreenProps<"RideDetail">) {
  function handleConnect() {
    console.log("hi");
    navigation.navigate("ConversationScreen");
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white py-6`}>
      <ScrollView style={tw`px-10`}>
        <View style={tw``}>
          <Text style={tw`text-center text-2xl font-bold mb-4`}>
            Chi tiết chuyến đi
          </Text>
          <View style={tw`mb-6`}>
            <Avatar
              size={160}
              rounded
              containerStyle={{
                alignSelf: "center",
                backgroundColor: "#c3c3c3",
              }}
            />
          </View>

          <View style={tw`mb-6`}>
            <Text style={tw`text-xl font-bold mb-2`}>Thông tin tài xế</Text>
            <View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw`text-lg w-[40%]`}>Họ và tên</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Trường</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Số điện thoại</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Giới thiệu</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Biển số xe</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>72-E1-73202</Text>
              </View>
            </View>
          </View>

          <View style={tw`mb-6`}>
            <Text style={tw`text-xl font-bold mb-2`}>Thông tin chuyến đi</Text>
            <View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw`text-lg w-[40%]`}>Nơi đi</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Nơi đến</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Khởi hành</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>Nguyễn Kiệt</Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Cước phí</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>10.000 VND</Text>
              </View>
            </View>
          </View>
          <View style={tw`items-center`}>
            <View style={tw`w-52`}>
              <MainButton eventHandler={handleConnect}>Kết nối</MainButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RideDetail;

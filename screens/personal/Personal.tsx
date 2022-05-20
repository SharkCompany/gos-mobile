import { useAppSelector } from "app/redux/store";
import { selectUser } from "app/redux/user/userSlice";
import { Text, TextTW, View } from "components/Themed";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import tw from "twrnc";
import { RootTabScreenProps } from "types";

export default function Personal({
  navigation,
}: RootTabScreenProps<"Personal">) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const userInfo = useAppSelector(selectUser);
  const [image, setImage] = useState(userInfo?.picture);
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw`h-[50%] bg-[#7EBC36] w-full pt-10 px-6 rounded-b-3xl`}>
        <Text style={tw`text-2xl font-bold text-center text-white`}>
          Xin Chào &nbsp; {userInfo?.name}
        </Text>
        <View style={tw`bg-inherit items-center justify-center h-full`}>
          {!image && (
            <Avatar
              size={160}
              rounded
              icon={{
                name: "camera",
                type: "font-awesome",
                size: 56,
              }}
              containerStyle={{
                marginBottom: 30,
                alignSelf: "center",
                backgroundColor: "#c3c3c3",
              }}
              onPress={pickImage}
            />
          )}
          {image && (
            <Avatar
              size={160}
              rounded
              source={{ uri: image }}
              containerStyle={{
                marginBottom: 30,
                alignSelf: "center",
                backgroundColor: "#c3c3c3",
              }}
              onPress={pickImage}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import { useNavigation } from "@react-navigation/native";
import { userApi } from "app/api/user.api";
import { setAppLoading } from "app/redux/setting/settingSlice";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import { selectUser, setUser } from "app/redux/user/userSlice";
import MainButton from "components/MainButton";
import PrimaryButton from "components/PrimaryButton";
import { Text, View, ViewTW } from "components/Themed";
import * as ImagePicker from "expo-image-picker";
import { FixMeLater } from "interfaces/migration";
import { UserModel } from "models/User.model";
import { default as React, useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput, ToastAndroid } from "react-native";
import { Avatar } from "react-native-elements";
import tw from "twrnc";
import { RootTabScreenProps } from "types";

export default function Personal({
  navigation,
}: RootTabScreenProps<"Personal">) {
  const userInfo = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  
  const navigator = useNavigation();
  const s = require("../../globalStyles");
  const widthRelative = "80%";

  const [phonenumber, setPhonenumber] = useState(userInfo?.phone);
  const [bienSoXe, setBienSoXe] = useState(userInfo?.licensePlates);
  const [bio, setBio] = useState(userInfo?.bio);
  const [name, setName] = useState(userInfo?.name);

  const [image, setImage] = useState<FixMeLater>(userInfo?.picture);

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

  async function getMeHandler() {
    const user: UserModel = await userApi.getMe();
    
    dispatch(setUser(user));
  }

  useEffect(() => {
    getMeHandler();
  }, []);

  const handleLogout = () =>{
    navigation.navigate("SocialLogin");
  }

  const handleSaveInformation = async () => {
    const updateData: Partial<UserModel> = {
      phone: phonenumber,
      bio: bio,
      licensePlates: bienSoXe,
      picture: image,
    };

    try {
      dispatch(setAppLoading(true));
      const data = await userApi.updateUser(updateData);
      ToastAndroid.show("C???p nh???t th??nh c??ng", ToastAndroid.BOTTOM);
      
      navigator.navigate("Root");
    } catch (error) {
      ToastAndroid.show("C???p nh???t th???t b???i!", ToastAndroid.BOTTOM);
      
    } finally {
      dispatch(setAppLoading(false));
    }
  };
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw`h-[50%] bg-[#7EBC36] w-full pt-10 px-6 rounded-b-3xl`}>
        <Text style={tw`text-2xl font-bold text-center text-white`}>
          Xin Ch??o &nbsp; {userInfo?.name}
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
      <ScrollView
        style={{
          width: "100%",
          flex: 1,
          paddingHorizontal: "6%",
        }}
      >
        <View
          style={{
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        />

        <View style={styles.inputPairContainer}>
          <Text style={styles.labelInput}>T??n c???a b???n</Text>
          <TextInput
            style={[styles.inputBasic, s.dropShadowButton]}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder=""
          />
        </View>

        <View style={styles.inputPairContainer}>
          <Text style={styles.labelInput}>S??? ??i???n tho???i</Text>
          <TextInput
            style={[styles.inputBasic, s.dropShadowButton]}
            value={phonenumber}
            onChangeText={(text) => setPhonenumber(text)}
            placeholder="090743265"
          />
        </View>
        <View style={styles.inputPairContainer}>
          <Text style={styles.labelInput}>Bi???n s??? xe</Text>
          <TextInput
            style={[styles.inputBasic, s.dropShadowButton]}
            value={bienSoXe}
            onChangeText={(text) => setBienSoXe(text)}
            placeholder="72E1-73202"
          />
        </View>
        <View style={styles.inputPairContainer}>
          <Text style={styles.labelInput}>Gi???i thi???u</Text>
          <TextInput
            multiline
            numberOfLines={4}
            scrollEnabled
            style={[styles.inputMultiLine, s.dropShadowButton]}
            value={bio}
            onChangeText={(text) => setBio(text)}
            placeholder="Hi tui la Kiet. Sinh vien nam 3 UIT"
          />
        </View>
        <MainButton eventHandler={handleSaveInformation}>C???p nh???t</MainButton>
        <ViewTW className="h-2"/>
        <PrimaryButton eventHandler={handleLogout}>????ng xu???t</PrimaryButton>
        <ViewTW className="h-10"></ViewTW>
      </ScrollView>
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
  headerH1: {
    fontSize: 24,
    marginBottom: 45,
    fontWeight: "700",
  },
  inputBasic: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputMultiLine: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    textAlignVertical: "top",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  labelInput: {
    fontSize: 18,
    paddingBottom: 3,
    paddingLeft: 6,
  },
  inputPairContainer: {
    flex: 1,
    marginBottom: 24,
    padding: 2,
    paddingHorizontal: 10,
  },
});

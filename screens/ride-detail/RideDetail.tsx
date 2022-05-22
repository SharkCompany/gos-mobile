import { rideApi } from "app/api/ride.api";
import { setAppLoading } from "app/redux/setting/settingSlice";
import { useAppDispatch } from "app/redux/store";
import { DateToDateTimeString } from "app/utils/DateTimeParse";
import { formatCurrency } from "app/utils/helper";
import MainButton from "components/MainButton";
import { Text, TextTW, View, ViewTW } from "components/Themed";
import { RideModel } from "models/Ride.model";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { HomeScreenProps } from "types";

type Props = {};

function RideDetail({ navigation, route }: HomeScreenProps<"RideDetail">) {
  const dispatch = useAppDispatch();

  async function handleConnect() {
    dispatch(setAppLoading(true));
    try {
      if (rideInfo?.id) {
        const res = await rideApi.connect(rideInfo?.id);
        
        ToastAndroid.show("Kết nối thành công", ToastAndroid.BOTTOM);
      }
    } catch (error) {
      
      ToastAndroid.show("Kết nối thất bại", ToastAndroid.BOTTOM);
    } finally {
      dispatch(setAppLoading(false));
    }

    // navigation.navigate("ConversationScreen");
  }

  const [rideInfo, setRideInfo] = useState<RideModel | undefined>();

  async function getRideInfo(id: number) {
    try {
      const ride = await rideApi.getRideById(id);
      
      
      if (ride) {
        setRideInfo(ride as unknown as RideModel);
      }
    } catch (error) {
      ToastAndroid.show("Lấy chuyến đi thất bại", ToastAndroid.BOTTOM);
      
      setRideInfo(undefined);
    }
  }

  useEffect(() => {
    getRideInfo(route.params.rideInfo?.id);
  }, [route.params.rideInfo]);

  if (!rideInfo) return <TextTW>lỗi</TextTW>;

  return (
    <SafeAreaView style={tw`flex-1 bg-white py-6`}>
      <ScrollView style={tw`px-10`}>
        <View style={tw``}>
          <Text style={tw`text-center text-2xl font-bold mb-4`}>
            Chi tiết chuyến đi
          </Text>
          <View style={tw`mb-6`}>
            <Avatar
              source={{ uri: rideInfo?.creator.picture }}
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
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.creator.name}
                </Text>
              </View>

              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Số điện thoại</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.creator.phone}
                </Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Giới thiệu</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.creator.bio}
                </Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Biển số xe</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.creator.licensePlates}
                </Text>
              </View>
            </View>
          </View>

          <View style={tw`mb-6`}>
            <Text style={tw`text-xl font-bold mb-2`}>Thông tin chuyến đi</Text>
            <View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw`text-lg w-[40%]`}>Nơi đi</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.departure?.title}
                </Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Nơi đến</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {rideInfo?.destination?.title}
                </Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Khởi hành</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {DateToDateTimeString(rideInfo?.timeStart)}
                </Text>
              </View>
              <View style={tw`flex-row mb-1`}>
                <Text style={tw` text-lg w-[40%]`}>Cước phí</Text>
                <Text style={tw`text-lg text-[#7EBC36]`}>
                  {/* {formatCurrency(rideInfo?.price)} */}
                </Text>
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

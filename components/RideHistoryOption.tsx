import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw, { create } from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FixMeLater } from "interfaces/migration";
import { DriveStatus, loaiChuyenDi, RideModel } from "models/Ride.model";
import { DateToDateTimeString } from "app/utils/DateTimeParse";
import { ViewTW } from "./Themed";
import { useAppSelector } from "app/redux/store";
import { selectUser } from "app/redux/user/userSlice";

export interface RideProps {
  rideInfo: RideModel;
  selectHandler: any;
}

const RideHistoryOption = ({ selectHandler, rideInfo }: RideProps) => {
  const onSelectItem = () => {
    if (selectHandler) {
      selectHandler();
    }
  };

  const {
    departure,
    destination,
    creator,
    matcher,
    timeStart,
    available,
    driveHistory,
    type,
  } = rideInfo;

  const getStatus = () => {
    const index = driveHistory.length - 1;
    if (!available && driveHistory[index].cancelReason !== null)
      return "Đã hủy";
    if (driveHistory[index]?.status === DriveStatus.waiting) return "Đang chờ";
    if (driveHistory[index]?.status === DriveStatus.matched)
      return "Đã kết nối";
    return driveHistory[index]?.status;
  };

  const userInfo = useAppSelector(selectUser);

  const typeChuyenDi = () => {
    if (rideInfo.creatorId === userInfo?.id) {
      if (type === loaiChuyenDi.dinho) return "Xin quá giang";
      else return "Tìm yên sau";
    } else {
      if (type === loaiChuyenDi.dinho) return "Cho quá giang";
      else return "Đi nhờ xe";
    }
  };

  return (
    <View style={tw`px-2 pt-1`}>
      <TouchableOpacity
        style={tw` items-center justify-between mb-2 px-4 shadow-md rounded-md flex-row py-2 bg-white`}
        onPress={onSelectItem}
      >
        <View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Text style={tw`font-bold`}>Điểm đi: </Text>
            <Text>{departure?.title}</Text>
          </View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Text style={tw`font-bold`}>Điểm đến: </Text>
            <Text>{destination?.title}</Text>
          </View>

          <View style={tw`flex-row items-center mb-2`}>
            <Text style={tw`font-bold`}>Khởi hành lúc: </Text>
            <Text>{DateToDateTimeString(timeStart)}</Text>
          </View>
          <View style={tw`flex-row items-center mb-2`}>
            <Text style={tw`font-bold`}>Người tạo: </Text>
            <Text>{creator.name}</Text>
          </View>
          <View style={tw`flex-row items-center mb-2`}>
            <Text></Text>
          </View>

          <ViewTW className="flex flex-row justify-end">
            <View
              style={tw`flex-row items-end mb-1 bg-[#95edb6] px-2 rounded-full mr-2`}
            >
              <Text>{typeChuyenDi()}</Text>
            </View>
            <View
              style={tw`flex-row items-end mb-1 bg-[#7EBC36] px-2 rounded-full `}
            >
              <Text>{getStatus()}</Text>
            </View>
          </ViewTW>
        </View>
        <View>
          <Ionicons
            name="caret-forward-outline"
            size={22}
            style={tw`opacity-80`}
            color="#29282F"
          />
        </View>
        {/* <View
					style={tw`flex-row items-end mb-1 bg-[#BDE952] px-2 rounded-full absolute right-4 bottom-2`}
				>
					<Text>Đã kết nối</Text>
				</View> */}
        {/* 
				<View
					style={tw`flex-row items-end mb-1 bg-[#F1F673] px-2 rounded-full absolute right-4 bottom-2`}
				>
					<Text>Đang chờ tài xế</Text>
				</View> */}

        {/* <View
          style={tw`flex-row items-end mb-1 bg-[#7EBC36] px-2 rounded-full absolute right-4 bottom-2`}
        >
          <Text>{getStatus()}</Text>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default RideHistoryOption;

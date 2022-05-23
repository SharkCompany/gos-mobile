import { formatCurrency } from "app/utils/helper";
import { placeIcon, placeIconInSearch } from "assets/images";
import React from "react";
import { Avatar, Image } from "react-native-elements";
import { TextTW, View, ViewTW } from "./Themed";
import tw from "twrnc";
import { ScrollView } from "react-native";
import { loaiChuyenDi, RideModel } from "models/Ride.model";

type Props = {
  rideInfo: RideModel;
};

export default function ThanksForUsingGos({ rideInfo }: Props) {
  const driver =
    rideInfo.type === loaiChuyenDi.dinho ? rideInfo.matcher : rideInfo.creator;
  const client =
    rideInfo.type === loaiChuyenDi.dinho ? rideInfo.creator : rideInfo.matcher;

    

  return (
    <ViewTW className="bg-inherit">
      <ScrollView>
        <TextTW className="text-xl font-bold text-center mt-10 bg-inherit mb-10">
          Cảm ơn bạn đã chọn GoS
        </TextTW>
        <ViewTW className="px-5 mb-20">
          <ViewTW className=" p-5 bg-gray-200">
            <ViewTW className="bg-white p-2">
              <TextTW className="text-lg text-gray-500">
                Trả bằng tiền mặt
              </TextTW>
              <TextTW className="text-lg font-bold">
                {formatCurrency(rideInfo?.price)}
              </TextTW>
              <ViewTW>
                <ViewTW className="flex flex-row items-center">
                  <Image source={placeIcon} style={tw`h-8 w-8 mr-3`} />
                  <ViewTW className="flex-1">
                    <TextTW className="font-bold text-lg">
                      {rideInfo.departure.title}
                    </TextTW>
                    <TextTW className="w-full">
                      {rideInfo.departure.address}
                      Đức
                    </TextTW>
                  </ViewTW>
                </ViewTW>
                <ViewTW className="flex flex-row items-center">
                  <Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
                  <ViewTW className="flex-1">
                    <TextTW className="font-bold text-lg">
                      {rideInfo.destination.title}
                    </TextTW>
                    <TextTW className="w-full">
                      {rideInfo.destination.address}
                    </TextTW>
                  </ViewTW>
                </ViewTW>
              </ViewTW>
            </ViewTW>
          </ViewTW>
        </ViewTW>
        <ViewTW className="px-5 mb-10">
          <ViewTW className=" p-5 bg-gray-200">
            <ViewTW className="z-10 absolute left-[44%] -top-5 bg-transparent">
              <Avatar
                size={80}
                rounded
                containerStyle={{
                  borderColor: "#7EBC36",
                  borderStyle: "solid",
                  borderWidth: 2,
                }}
                source={{ uri: driver?.picture }}
              />
            </ViewTW>
            <ViewTW className="bg-white">
              <TextTW className="mt-12 font-bold text-center text-xl">
                {driver?.name}
              </TextTW>
              <ViewTW className="flex justify-center w-full px-20">
                <TextTW className="text-center py-2 text-[#7EBC36] mt-5 mb-5 bg-gray-200 ">
                  {driver?.licensePlates}
                </TextTW>
              </ViewTW>
              <TextTW className="px-5 mb-5 text-center text-gray-400 ">
                Thời gian di chuyển ước tính 1 giờ 30 phút
              </TextTW>
            </ViewTW>
          </ViewTW>
        </ViewTW>
      </ScrollView>
    </ViewTW>
  );
}

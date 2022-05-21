import { formatCurrency } from "app/utils/helper";
import { placeIcon, placeIconInSearch } from "assets/images";
import React from "react";
import { Avatar, Image } from "react-native-elements";
import { TextTW, View, ViewTW } from "./Themed";
import tw from "twrnc";
import { ScrollView } from "react-native";

type Props = {
  price: number;
};

export default function ThanksForUsingGos({ price }: Props) {
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
                {formatCurrency(price)}
              </TextTW>
              <ViewTW>
                <ViewTW className="flex flex-row items-center">
                  <Image source={placeIcon} style={tw`h-8 w-8 mr-3`} />
                  <ViewTW className="flex-1">
                    <TextTW className="font-bold text-lg">
                      Ký túc xá khu A
                    </TextTW>
                    <TextTW className="w-full">
                      Tạ Quang Bửu, Khu phố 6, Phường Linh Trung, Thành phố Thủ
                      Đức
                    </TextTW>
                  </ViewTW>
                </ViewTW>
                <ViewTW className="flex flex-row items-center">
                  <Image source={placeIconInSearch} style={tw`h-8 w-8 mr-3`} />
                  <ViewTW className="flex-1">
                    <TextTW className="font-bold text-lg">
                      Ký túc xá khu B
                    </TextTW>
                    <TextTW className="w-full">Mạc Đĩnh Chi, Khu phố 6</TextTW>
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
                source={{ uri: "https://picsum.photos/300/300" }}
              />
            </ViewTW>
            <ViewTW className="bg-white">
              <TextTW className="mt-12 font-bold text-center text-xl">
                Nguyễn Anh Kiệt
              </TextTW>
              <ViewTW className="flex justify-center w-full px-20">
                <TextTW className="text-center inline py-2 text-[#7EBC36] mt-5 mb-5 bg-gray-200 ">
                  51H-626.23
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

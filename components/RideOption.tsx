import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { placeIcon } from "assets/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FixMeLater } from "interfaces/migration";
import { loaiChuyenDi, RideModel } from "models/Ride.model";
import { useAppSelector } from "app/redux/store";
import { placesSelector } from "app/redux/places/placeSlice";
import { PlaceModel } from "models/Place.model";
import { DateToDateTimeString } from "app/utils/DateTimeParse";

interface Props {
  selectHandler: any;
  rideInfo: RideModel;
}

const RideOption = (props: Props) => {
  if (props.rideInfo.type === loaiChuyenDi.yensau) return <DiNho {...props} />;
  else return <YenSau {...props} />;
};

const DiNho = ({ selectHandler, rideInfo }: Props) => {
  const onSelectItem = () => {
    if (selectHandler) {
      selectHandler();
    }
  };

  return (
    <View style={tw`px-4 pt-1`}>
      <TouchableOpacity
        style={tw` items-center justify-between mb-2 px-3 shadow-md rounded-md flex-row py-2 bg-white`}
        onPress={onSelectItem}
      >
        <View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Từ: </Text>
            <Text>{rideInfo?.departure.title}</Text>
          </View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Đến: </Text>
            <Text>{rideInfo.destination?.title}</Text>
          </View>

          <View style={tw`flex-row items-center mb-1`}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Thời gian: </Text>
            <Text>{DateToDateTimeString(new Date(rideInfo.timeStart))}</Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="caret-forward-outline"
            size={22}
            style={tw`opacity-80`}
            color="#29282F"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const YenSau = ({ selectHandler, rideInfo }: Props) => {
  const places = useAppSelector(placesSelector);

  function getPlace(id: number): PlaceModel | null {
    const index = places.findIndex((place) => place.id === id);
    if (index >= 0) {
      return places[index];
    }
    return null;
  }

  const start = getPlace(rideInfo.departureId);
  const end = getPlace(rideInfo.destinationId);

  const onSelectItem = () => {
    if (selectHandler) {
      selectHandler();
    }
  };

  return (
    <View style={tw`px-4 pt-1`}>
      <TouchableOpacity
        style={tw` items-center justify-between mb-2 px-3 shadow-md rounded-md flex-row py-2 bg-white`}
        onPress={onSelectItem}
      >
        <View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Từ: </Text>
            <Text>{start?.title}</Text>
          </View>
          <View style={tw`flex-row items-center mb-1 `}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Đến: </Text>
            <Text>{end?.title}</Text>
          </View>

          <View style={tw`flex-row items-center mb-1`}>
            <Image source={placeIcon} style={tw`h-5 w-5 mr-3`} />
            <Text style={tw`font-bold`}>Thời gian: </Text>
            <Text>{DateToDateTimeString(new Date(rideInfo.timeStart))}</Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="caret-forward-outline"
            size={22}
            style={tw`opacity-80`}
            color="#29282F"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RideOption;

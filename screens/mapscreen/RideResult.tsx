import { FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { Text, View } from "components/Themed";
import { Ionicons } from "@expo/vector-icons";
import RideOption from "components/RideOption";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import {
  getRides,
  rideSelector,
  selectRides,
  setDeparture,
  setDestination,
} from "app/redux/ride/rideSlice";
import { MapSearchScreenProps } from "types";
import { BackHandler } from "react-native";
import { FixMeLater } from "interfaces/migration";
import { loaiChuyenDi, RideModel } from "models/Ride.model";
type Props = {};

const RideResult = (
  { navigation }: MapSearchScreenProps<"RideResult">,
  props: Props
) => {
  function handleBackButtonClick() {
    navigation.goBack();
    dispatch(setDestination(null));
    dispatch(setDeparture(null));
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
    // Cho nay get data dua nao thang redux ne
    // Get data ride dua vao destiantion and departure trong redux
  }, []);

  const dispatch = useAppDispatch();

  const onNavigateToMainSearchScreen = () => {
    // navigation.navigate("RideDetail",{ rideInfo: item });
  };

  const cancelSelectingRides = () => {
    dispatch(setDestination(null));
    dispatch(setDeparture(null));
    navigation.goBack();
  };

  const selectRide = (item: RideModel) => {
    // onNavigateToMainSearchScreen();
    navigation.navigate("RideDetail", { rideInfo: item });
  };

  const rides = useAppSelector(selectRides);
  const ridesInfor = useAppSelector(rideSelector);

  useEffect(() => {
    dispatch(
      getRides({
        available: true,
        type: loaiChuyenDi.yensau,
        departureId: ridesInfor.departure.id,
      })
    );
  }, []);

  return (
    <View style={tw`flex-1 pt-4`}>
      <View style={tw`flex-row justify-center mx-6 mb-3`}>
        <TouchableOpacity
          style={tw`absolute top-0 left-0`}
          onPress={cancelSelectingRides}
        >
          <Ionicons name="caret-back-outline" size={24} color="#BDE952" />
        </TouchableOpacity>

        <Text style={tw`text-xl font-bold`}>Chuyến đi gợi ý</Text>
      </View>
      <FlatList
        style={tw`px-4`}
        data={rides}
        renderItem={({ item }) => (
          <RideOption
            rideInfo={item as unknown as RideModel}
            selectHandler={() => {
              selectRide(item);
            }}
          />
        )}
      />
    </View>
  );
};

export default RideResult;

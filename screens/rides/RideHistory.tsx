import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RideHistoryScreenProps, RootTabScreenProps } from "types";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import SwitchSelector from "react-native-switch-selector";
import { FixMeLater } from "interfaces/migration";
import PlaceOption from "components/PlaceOption";
import RideOption from "components/RideOption";
import RideHistoryOption from "components/RideHistoryOption";
import { useEffect, useState } from "react";
import { loaiChuyenDi } from "models/Ride.model";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import { getRides, selectRides, setRides } from "app/redux/ride/rideSlice";
import { selectUser } from "app/redux/user/userSlice";

export default function RideHistory({
  navigation,
}: RideHistoryScreenProps<"RideHistory">) {
  const [selectingRideType, setSelectingRideType] = useState<loaiChuyenDi>(
    loaiChuyenDi.dinho
  );
  const dispatch = useAppDispatch();
  const options = [
    {
      label: "Đi nhờ xe",
      value: loaiChuyenDi.dinho,
      testID: "switch-one",
      accessibilityLabel: "switch-one",
    },
    {
      label: "Tìm yên sau",
      value: loaiChuyenDi.yensau,
      testID: "switch-one",
      accessibilityLabel: "switch-one",
    },
  ];

  const handleSelectingTypeChange = (value: FixMeLater) => {
    console.log(value);
    setSelectingRideType(value);
  };

  const rides = useAppSelector(selectRides);

  const userInfor = useAppSelector(selectUser);

  const my_drives = rides.filter((ride) => ride.creatorId === userInfor?.id);

  console.log(my_drives.length);
  console.log(rides.length);

  useEffect(() => {
    dispatch(getRides({ type: selectingRideType }));
  }, [selectingRideType]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      <View style={tw`flex-row justify-between my-4 items-center px-6 `}>
        <TouchableOpacity>
          <Ionicons name="caret-back" size={26} color="#7EBC36" />
        </TouchableOpacity>

        <Text style={tw`text-2xl font-bold`}>Lịch sử chuyến đi</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CreateRide", {
              rideType: selectingRideType,
            })
          }
        >
          <Ionicons name="add-circle" size={26} color="#7EBC36" />
        </TouchableOpacity>
      </View>

      <View style={tw`px-2 items-center mb-4 px-6`}>
        <SwitchSelector
          options={options}
          initial={0}
          onPress={handleSelectingTypeChange}
          buttonColor="#7EBC36"
          selectedColor="#FCF9F9"
          fontSize={14}
          borderColor="#7EBC36"
          hasPadding
        />
      </View>

      {}
      <ScrollView style={tw`px-6`}>
        {my_drives.map((ride) => (
          <RideHistoryOption rideInfo={ride} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

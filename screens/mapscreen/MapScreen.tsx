import Ionicons from "@expo/vector-icons/Ionicons";
import { savePlaces } from "app/redux/places/placeSlice";
import { getRides, selectRides } from "app/redux/ride/rideSlice";
import { useAppDispatch, useAppSelector } from "app/redux/store";
import Map from "components/Map";
import RideOption from "components/RideOption";
import { TextTW, View, ViewTW } from "components/Themed";
import jsonData from "constants/destination.json";
import { FixMeLater } from "interfaces/migration";
import { loaiChuyenDi, RideModel } from "models/Ride.model";
import MapScreenSearchNavigator from "navigation/MapScreenSearchNavigator";
import React, { useEffect, useState } from "react";
import {
	FlatList,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { HomeScreenProps } from "types";

type Props = {};

const MapScreen = ({ navigation, route }: HomeScreenProps<"MapScreen">) => {
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

	const [tab, setTab] = useState<"dinho" | "yensau">(route.params.type);

	const handleCreateNewRide = () => {};

	useEffect(() => {
		console.log("mapscreen", route.params.type);
		if (route.params.type) {
			setTab(route.params.type);
		}
	}, [route.params.type]);

	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			<View style={tw`flex-row justify-between h-1/10 items-center px-6`}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>

				<SwitchSelector
					options={options}
					initial={tab === "dinho" ? 0 : 1}
					onPress={(value: FixMeLater) => {
						setTab(value);
					}}
					style={{ width: "55%" }}
					buttonColor="#7EBC36"
					selectedColor="#FCF9F9"
					fontSize={14}
					borderColor="#7EBC36"
					hasPadding
				/>

				<TouchableOpacity onPress={() => handleCreateNewRide}>
					<Ionicons name="add-circle" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>
			{tab === "yensau" ? (
				<ViewTW className="h-full">
					<TimYenSau />
				</ViewTW>
			) : (
				<>
					<View style={tw`h-2/5`}>
						<Map />
					</View>
					<MapScreenSearchNavigator />
				</>
			)}
		</SafeAreaView>
	);
};

const TimYenSau = () => {
	const selectRide = (a: any) => {
		console.log(a);
	};
	const dispatch = useAppDispatch();
	const rides = useAppSelector(selectRides);
	console.log("rides nè", rides);
	useEffect(() => {
		dispatch(getRides({ available: true, type: loaiChuyenDi.dinho }));
	}, []);

	return (
		<ViewTW className="pb-16">
			<FlatList
				style={tw`px-4`}
				data={rides}
				renderItem={({ item }) => (
					<RideOption
						rideInfo={item as RideModel}
						selectHandler={selectRide}
					/>
				)}
			/>
			{/* <ScrollView>
        {rides.map((ride) => (
          <RideOption rideInfo={ride} selectHandler={selectRide} />
        ))}
      </ScrollView> */}
			<ViewTW className="h-56"></ViewTW>
		</ViewTW>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});

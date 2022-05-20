import { Ionicons } from "@expo/vector-icons";
import { placesSelector } from "app/redux/places/placeSlice";
import { useAppSelector } from "app/redux/store";
import DateTimePicker from "components/DateTimePicker";
import InputWithLabel, {
	TouchableInputWithLabel,
} from "components/InputWithLabel";
import MainButton from "components/MainButton";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { RideHistoryScreenProps } from "types";

export default function CreateRide({
	navigation,
	route,
}: RideHistoryScreenProps<"RideHistory">) {
	const s = require("../../globalStyles");

	const [originInput, setOriginInput] = useState("");

	const [destinationInput, setDestinationInput] = useState("");

	const [currentInputing, setCurrentInputing] = useState("origin");

	const [departureTime, setDepartureTime] = useState("");

	const [isShowingTimePicker, setIsShowingTimePicker] = useState(false);

	const handleInputOrigin = () => {
		setCurrentInputing("origin");
		navigation.navigate("CreateRideSearchPlaces");
	};

	const handleInputDestination = () => {
		setCurrentInputing("destination");
		navigation.navigate("CreateRideSearchPlaces");
	};

	const onSelectDepartureTime = (time: FixMeLater) => {
		const dformat =
			[time.getHours(), time.getMinutes()].join(":") +
			" - " +
			[time.getDate(), time.getMonth() + 1, time.getFullYear()].join("/");
		setDepartureTime(dformat);
	};

	const handleOnPress = () => {};

	useEffect(() => {
		const returnPlacesSearch: FixMeLater = route.params;

		if (returnPlacesSearch?.place) {
			if (currentInputing === "origin") {
				setOriginInput(returnPlacesSearch?.place?.title);
			} else if (currentInputing === "destination") {
				setDestinationInput(returnPlacesSearch?.place?.title);
			}
		}
	}, [route.params]);

	return (
		<SafeAreaView style={tw`flex-1 bg-white px-6`}>
			<View style={tw`justify-center my-4  `}>
				<View style={tw`items-center`}>
					<Text style={tw`text-2xl font-bold`}>Tạo chuyến đi</Text>
				</View>

				<TouchableOpacity style={tw`absolute `}>
					<Ionicons name="caret-back" size={26} color="#7EBC36" />
				</TouchableOpacity>
			</View>

			<View style={tw`mb-4`}>
				<TouchableInputWithLabel
					label="Bắt đầu"
					pressInHandler={handleInputOrigin}
					value={originInput}
					setValue={setOriginInput}
				/>
				<TouchableInputWithLabel
					label="Kết thúc"
					pressInHandler={handleInputDestination}
					value={destinationInput}
					setValue={setDestinationInput}
				/>

				<InputWithLabel label="Giá cước đề xuất" numeric={true} />

				<TouchableInputWithLabel
					label="Thời gian xuất phát"
					pressInHandler={() => setIsShowingTimePicker(true)}
					value={departureTime}
				/>

				<DateTimePicker
					isVisible={isShowingTimePicker}
					setIsVisible={setIsShowingTimePicker}
					selectHandler={onSelectDepartureTime}
				/>
			</View>
			<View style={tw`items-center`}>
				<View style={tw`w-[50%]`}>
					<MainButton eventHandler={handleOnPress}>
						Tạo chuyến đi
					</MainButton>
				</View>
			</View>
		</SafeAreaView>
	);
}

import { Ionicons } from "@expo/vector-icons";
import { placesSelector } from "app/redux/places/placeSlice";
import { useAppSelector } from "app/redux/store";
import { DateToDateTimeString } from "app/utils/DateTimeParse";
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

	const [originInput, setOriginInput] = useState<FixMeLater>("");

	const [destinationInput, setDestinationInput] = useState<FixMeLater>("");

	const [currentInputing, setCurrentInputing] =
		useState<FixMeLater>("origin");

	const [displayingDepartureTime, setDisplayingDepartureTime] = useState("");

	const [dataToServer, setDataToServer] = useState({
		origin: "",
		destination: "",
		price: 1,
		departureTime: "",
	});

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
		setDisplayingDepartureTime(DateToDateTimeString(time));
		setDataToServer({ ...dataToServer, departureTime: time.toISOString() });
		// console.log(DateToDateTimeString(time));
	};

	const handleOnPress = () => {
		console.log(dataToServer);
	};

	useEffect(() => {
		const returnPlacesSearch: FixMeLater = route.params;

		if (returnPlacesSearch?.place) {
			if (currentInputing === "origin") {
				setOriginInput(returnPlacesSearch?.place);
				setDataToServer({
					...dataToServer,
					origin: returnPlacesSearch?.place?.id,
				});
			} else if (currentInputing === "destination") {
				setDestinationInput(returnPlacesSearch?.place);
				setDataToServer({
					...dataToServer,
					destination: returnPlacesSearch?.place?.id,
				});
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
					value={originInput?.title}
					setValue={setOriginInput}
				/>
				<TouchableInputWithLabel
					label="Kết thúc"
					pressInHandler={handleInputDestination}
					value={destinationInput?.title}
					setValue={setDestinationInput}
				/>

				<InputWithLabel label="Giá cước đề xuất" numeric={true} />

				<TouchableInputWithLabel
					label="Thời gian xuất phát"
					pressInHandler={() => setIsShowingTimePicker(true)}
					value={displayingDepartureTime}
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

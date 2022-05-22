import { Ionicons } from "@expo/vector-icons";
import { createRide } from "app/redux/ride/rideSlice";
import { useAppDispatch } from "app/redux/store";
import { DateToDateTimeString } from "app/utils/DateTimeParse";
import DateTimePicker from "components/DateTimePicker";
import InputWithLabel, {
  TouchableInputWithLabel,
} from "components/InputWithLabel";
import MainButton from "components/MainButton";
import { Text, View } from "components/Themed";
import { FixMeLater } from "interfaces/migration";
import { loaiChuyenDi, RideModel } from "models/Ride.model";
import { useEffect, useState } from "react";
import { ScrollView, ToastAndroid, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { RideHistoryScreenProps } from "types";
import RadioButtonRN from "radio-buttons-react-native";
import CustomRadioButton from "components/CustomRadioButton";

export default function CreateRide({
  navigation,
  route,
}: RideHistoryScreenProps<"RideHistory">) {
  const data = [
    {
      value: loaiChuyenDi.dinho,
      label: "Đi nhờ xe",
    },
    {
      value: loaiChuyenDi.yensau,
      label: "Tìm yên sau",
    },
  ];

  const dispatch = useAppDispatch();

  const [originInput, setOriginInput] = useState<FixMeLater>("");

  const [destinationInput, setDestinationInput] = useState<FixMeLater>("");

  const [priceInput, setPriceInput] = useState<number>();

  const [currentInputing, setCurrentInputing] = useState<FixMeLater>("origin");

  const [displayingDepartureTime, setDisplayingDepartureTime] = useState("");

  const [dataToServer, setDataToServer] = useState<FixMeLater>({
    destinationId: "",
    price: "1",
    available: true,
    timeStart: "",
    departureId: "",
    type: loaiChuyenDi.dinho,
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
    setDataToServer({ ...dataToServer, timeStart: time.toISOString() });
    // 
  };

  const handlePriceInputChange = (value: FixMeLater) => {
    setPriceInput(value);
    setDataToServer({ ...dataToServer, price: parseInt(value) });
  };

  const handleTypeChange = (item: { label: string; value: string }) => {
    setDataToServer({ ...dataToServer, type: item.value });
  };

  const handleOnPress = () => {
    
    dispatch(createRide(dataToServer)).then((data) => {
      if (data.payload) {
        
        ToastAndroid.show("Tạo chuyến đi thành công", ToastAndroid.BOTTOM);
		navigation.goBack();
      } else {
        ToastAndroid.show(
          "Tạo chuyến đi thất bại, giá cước không dược quá 500.000đ",
          ToastAndroid.BOTTOM
        );
      }
      // navigation.goBack();
    });
  };

  useEffect(() => {
    const returnPlacesSearch: FixMeLater = route.params;

    if (returnPlacesSearch?.place) {
      if (currentInputing === "origin") {
        setOriginInput(returnPlacesSearch?.place);
        setDataToServer({
          ...dataToServer,
          departureId: returnPlacesSearch?.place?.id,
        });
      } else if (currentInputing === "destination") {
        setDestinationInput(returnPlacesSearch?.place);
        setDataToServer({
          ...dataToServer,
          destinationId: returnPlacesSearch?.place?.id,
        });
      }
    }
  }, [route.params]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      <ScrollView style={tw`px-6`}>
        <View style={tw`justify-center my-4  `}>
          <View style={tw`items-center`}>
            <Text style={tw`text-2xl font-bold`}>Tạo chuyến đi</Text>
          </View>

          <TouchableOpacity
            style={tw`absolute `}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="caret-back" size={26} color="#7EBC36" />
          </TouchableOpacity>
        </View>

        <View style={tw`mb-4`}>
          <CustomRadioButton
            data={data}
            onChangeHandler={handleTypeChange}
            label="Loại chuyến đi"
          />
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

          <InputWithLabel
            label="Giá cước đề xuất"
            numeric={true}
            value={priceInput}
            valueChangeHandler={handlePriceInputChange}
          />

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
        <View style={tw`items-center mb-10`}>
          <View style={tw`w-[60%]`}>
            <MainButton eventHandler={handleOnPress}>Tạo chuyến đi</MainButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

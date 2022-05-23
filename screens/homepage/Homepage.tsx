import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import NotificationTag from "components/NotificationTag";
import { Text, View } from "components/Themed";
import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { HomeScreenProps } from "types";
import { diNhoXe, timYenSau } from "assets/images";
import { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { FixMeLater } from "interfaces/migration";
import HomeCarousel from "components/Carousel/HomeCarousel";

export default function Homepage({ navigation }: HomeScreenProps<"Home">) {
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const handlePressDiNhoXe = () => {
    navigation.navigate("MapScreen", { type: "dinho" });
  };

  const handleTimYenSau = () => {
    navigation.navigate("MapScreen", { type: "yensau" });
  };

  const carouselRef = useRef<FixMeLater>();

  return (
    <View style={tw`flex-1 items-center `}>
      <View style={tw`h-[50%] bg-[#7EBC36] w-full pt-10 px-6 rounded-b-3xl`}>
        <Text style={tw`text-2xl font-bold`}>Welcome Nguyen Kiet</Text>
        <View style={tw`bg-inherit items-center justify-center `}>
          <HomeCarousel />
        </View>
      </View>
      <View></View>
      <View style={tw`w-full px-6 flex-row justify-between px-10`}>
        <TouchableOpacity
          onPress={handlePressDiNhoXe}
          style={tw`w-36 h-44 bg-white -mt-20 rounded-2xl items-center justify-center shadow-lg mr-2`}
        >
          <MaterialCommunityIcons name="motorbike" size={80} color="#7EBC36" />

          <Text style={tw`text-xl font-bold text-[#7EBC36]`}>Đi nhờ xe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTimYenSau}
          style={tw`w-36 h-44 bg-white -mt-20 rounded-2xl items-center justify-center shadow-lg`}
        >
          <MaterialIcons name="person" size={80} color="#7EBC36" />
          <Text style={tw`text-xl font-bold text-[#7EBC36]`}>Tìm yên sau</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-8 items-start w-full flex-1`}>
        <Text style={tw`text-2xl font-bold px-6 py-2`}>Thông báo</Text>
        <ScrollView style={tw`w-full mb-2`}>
          <NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />
          <NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />
          <NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />
          <NotificationTag content="Bạn và Kiệt đã kết nối với nhau" />
        </ScrollView>
      </View>
    </View>
  );
}

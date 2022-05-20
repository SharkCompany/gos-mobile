import EditScreenInfo from "components/EditScreenInfo";
import { Text, TextTW, View } from "components/Themed";
import { StyleSheet } from "react-native";
import tw from "twrnc";

export default function Personal({
  navigation,
}: RootTabScreenProps<"Personal">) {
  return (
    <View style={tw`flex-1 items-center`}>
      <View style={tw`h-[40%] bg-[#7EBC36] w-full pt-10 px-6 rounded-b-3xl`}>
        <Text style={tw`text-2xl font-bold text-center text-white`}>Welcome Nguyen Kiet</Text>
        <View style={tw`bg-inherit items-center justify-center h-full`}>
          <TextTW className="text-center text-white"></TextTW>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

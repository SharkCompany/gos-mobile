import ThanksForUsingGos from "components/ThanksForUsingGos";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenProps } from "types";

export default function ConnectSuccessfully({
  navigation,
  route,
}: HomeScreenProps<"ConnectSucessfully">) {
  console.log("connect nè", route.params.rideInfo);
  return (
    <SafeAreaView>
      <ThanksForUsingGos rideInfo={route?.params?.rideInfo} />
    </SafeAreaView>
  );
}

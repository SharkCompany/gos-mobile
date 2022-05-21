import ChatConversation from "components/ChatConversation/ChatConversation";
import EditScreenInfo from "components/EditScreenInfo";
import ThanksForUsingGos from "components/ThanksForUsingGos";
import { Text, View } from "components/Themed";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabScreenProps } from "types";

export default function Messages({
  navigation,
}: RootTabScreenProps<"Messages">) {
  return (
    <SafeAreaView>
      <ThanksForUsingGos price={500000} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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

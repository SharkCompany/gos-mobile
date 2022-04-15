import EditScreenInfo from "components/EditScreenInfo";
import { Text, View } from "components/Themed";
import { StyleSheet } from "react-native";
import { RootTabScreenProps } from "types";

export default function Personal({
  navigation,
}: RootTabScreenProps<"Personal">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
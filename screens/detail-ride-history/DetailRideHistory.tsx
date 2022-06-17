import { StyleSheet } from "react-native";
import React from "react";
import { Text, TextTW, View, ViewTW} from "components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import FeathureIcon from "components/FeathureIcon";

type Props = {};

const DetailRideHistory = (props: Props) => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Thông tin chi tiết</Text>

      <View style={styles.rectangle1}>
        <View style={styles.itemWrapper2}>
          <FeathureIcon name="map-pin" color="#7EBC36"  />
          <Text style={styles.item1} >Chuyến đi</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.itemTitle}>Điểm đón</Text>
          <Text style={styles.item2}>Ký túc xá khu A</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text style={styles.item4}>Điểm đến</Text>
          <Text style={styles.item3}>Ký túc xá khu B</Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text>Cước phí</Text>
          <Text style={styles.item3}>10000</Text>
          <Text></Text>
        </View>
        <View style={styles.itemWrapper}>
          <Text>Khởi hành</Text>
          <Text style={styles.item3}>12/02/2022</Text>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailRideHistory;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  rectangle1: {
    padding:10,
    width: 307,
    height: 222,
    backgroundColor: "#E6E6E6",
  },
  
  itemWrapper: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E6E6E6",
    marginBottom: 10,


  },
  itemWrapper2: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6E6E6",

  },
  item1:{
    marginLeft:10,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemTitle: {
    fontSize: 14,

  },
  item2:{
    color: "#666666",
    fontSize: 14,
  },
  item3:{
      color: "#666666",
      fontSize: 14,
  },
  item4:{
    fontSize: 14,
  },

});

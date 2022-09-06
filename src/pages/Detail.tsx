import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import SwiperComponent from "../components/Swiper";
import Stars from  'react-native-stars';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems: 'center', flexDirection:'row'}}>
            <Stars
            default={4}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiperContent: {
    flexDirection: "row",
    height: 340,
    width: "100%",
  },
});

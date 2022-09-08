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
import Stars from "react-native-star-rating";

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return index < 5 ? (
                <Ionicons key={index} name="md-star" color="#eedf11" />
              ) : (
                <Ionicons key={index} name="md-star-outline" color="#000" />
              );
            })}
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
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  house: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "$4f4a4a",
  },
  rating: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 9,
    color: "$4f4a4a",
  },
});

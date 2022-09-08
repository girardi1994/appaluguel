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
      <Text style={styles.price}>
        R$ 1.250,00
      </Text>
      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24h.
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 35}}>
<View style={styles.slide}>
<Image
source={require('../assets/house6.jpg')}
style={{width: 90, height: 90, borderRadius: 8}}
/>

</View>
<View style={styles.slide}>
<Image
source={require('../assets/house5.jpg')}
style={{width: 90, height: 90, borderRadius: 8}}
/>

</View>
<View style={styles.slide}>
<Image
source={require('../assets/house2.jpg')}
style={{width: 90, height: 90, borderRadius: 8}}
/>
</View>
      </ScrollView>
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
  price:{
    paddingHorizontal: 20,
    fontFamily:'Montserrat_700Bold',
    fontSize: 16,
    color: '#000',
  },
  description:{
    paddingHorizontal: 20,
    fontFamily:'Montserrat_500Medium',
    fontSize: 14,
    color: '#b3aeae',
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  }
});

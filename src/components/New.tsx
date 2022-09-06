import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  cover: ImageSourcePropType;
  name: string;
  description: string;
  onPress: () => void;
}

export default function New({ cover, name, description, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={cover} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.dot}></View>
        <Text style={styles.badge}>Novo</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <View style={{ width: "80%" }}>
          <Text style={styles.price}>R$ 1.204.90</Text>
        </View>
        <View style={{ width: "20%" }}>
          <Ionicons name="ios-add-circle" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    color: "4f4a4a",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "red",
    marginHorizontal: 4,
  },
  badge: {
    color: "red",
    fontSize: 9,
    fontFamily: "Montserrat_700Bold",
  },
  description:{
    color: "#4f4a4a",
    fontSize: 9,
    fontFamily: "Montserrat_400Regular",
  },
  footer:{
    flexDirection:'row',
    marginTop:5,
    alignItems:"center",
    width: '100%',
  },
  price:{
    fontSize:15,
    fontFamily: "Montserrat_700Bold",
  }
});

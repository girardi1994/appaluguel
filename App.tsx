import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}

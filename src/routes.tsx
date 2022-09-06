import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Alugue",
            headerTitleStyle: {
              fontFamily: "Montserrat_700Bold",
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

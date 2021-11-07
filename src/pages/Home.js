import React from "react"; // Sempre usar o React para usar a sintaxe do JSX
import {View, Text} from "react-native";

export function Home() {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
    </View>
  );
}
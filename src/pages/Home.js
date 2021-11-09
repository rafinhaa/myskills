import React, {useState} from "react"; // Sempre usar o React para usar a sintaxe do JSX
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]); // ...oldState = é o array que tem em setMySkills
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Rafael!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite sua skill" 
        placeholderTextColor="#555" 
        onChangeText={text => setNewSkill(text)}
      />

      <Button 
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginVertical:50}]}>
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 20 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
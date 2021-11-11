import React, {useEffect, useState} from "react"; // Sempre usar o React para usar a sintaxe do JSX
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, data]); // ...oldState = é o array que tem em setMySkills
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(skills => skills.filter(skill => skill.id !== id)); // Percorre o array e retorna todos os objetos que não é o igual ao id passado
  }

  useEffect(() => {
    const currentHours = new Date().getHours();
    switch (true) {
      case currentHours >= 0 && currentHours < 12:
        setGretting('Bom dia!');
        break;
      case currentHours >= 12 && currentHours < 18:
        setGretting('Boa tarde!');
        break;
      default:
        setGretting('Boa noite!');
        break;
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, Rafael!</Text>
      <Text style={styles.greetings}>
        {gretting}
      </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite sua skill" 
        placeholderTextColor="#555" 
        onChangeText={text => setNewSkill(text)}
      />

      <Button 
        onPress={handleAddNewSkill}
        title="Adicionar"
      />

      <Text style={[styles.title, {marginVertical:50}]}>
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
         /> }
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
  greetings: {
    color: "#fff",
    fontSize: 18,
  },
});
import React, {useState} from "react"; // Sempre usar o React para usar a sintaxe do JSX
import {View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity,
  } from "react-native";

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
        placeholder="Digite seu nome" 
        placeholderTextColor="#555" 
        onChangeText={text => setNewSkill(text)}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginVertical:50}]}>
        My Skills
      </Text>
      {
        mySkills.map((skill, index) => (
          <TouchableOpacity
            style={styles.buttonSkill} 
            key={index}  
          >
            <Text  style={styles.skill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }
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
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  skill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
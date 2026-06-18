import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FILMES = [
  { id: "0", nome: "Interestelar" },
  { id: "1", nome: "A Origem" },
  { id: "2", nome: "Batman: O Cavaleiro das Trevas" },
  { id: "3", nome: "Avatar" },
  { id: "4", nome: "Toy Story" },
  { id: "5", nome: "Shrek" },
  { id: "6", nome: "Vingadores: Ultimato" },
  { id: "7", nome: "Gladiador" },
  { id: "8", nome: "Matrix" },
  { id: "9", nome: "Titanic" },
];

export default function Filme() {
  const { id } = useLocalSearchParams();

  const filme = FILMES.find((f) => f.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Exibindo detalhes do filme: {filme?.nome}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Voltar à Home
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00ee3b",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
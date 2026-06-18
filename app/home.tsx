import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Home() {
  const { user } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Clube de Cinema</Text>

      {user ? (
        <Text style={styles.message}>
          Bem-vindo, {user}! Hoje tem promoção para sócios! Ingresso R$10,00.
        </Text>
      ) : (
        <Text style={styles.message}>
          Bem-vindo ao Clube de Cinema! Ingresso R$20,00.
        </Text>
      )}

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Voltar à Tela Inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 30,
  },
  message: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
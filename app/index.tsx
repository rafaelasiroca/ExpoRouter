import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  function entrarComoUsuario() {
    router.push("/home?user=Fulano");
  }

  const filmeAleatorio = () => {
  const id = Math.floor(Math.random() * 10);
  router.push(`/filme/movie/${id}`);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube de Cinema</Text>

      {/* Botão 1 - usando Link */}
      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar como Convidado</Text>
        </Pressable>
      </Link>

      {/* Botão 2 - usando router.push */}
      <Pressable style={styles.button} onPress={entrarComoUsuario}>
        <Text style={styles.buttonText}>Entrar como Usuário Logado</Text>
      </Pressable>

      {/* Botão 3 - usando router.push */}
      <Pressable style={styles.button} onPress={filmeAleatorio}>
        <Text style={styles.buttonText}>Ver um Filme Aleatório</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
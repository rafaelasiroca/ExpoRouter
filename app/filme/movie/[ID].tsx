import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Filme() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Filme ID: {id}</Text>
    </View>
  );
}
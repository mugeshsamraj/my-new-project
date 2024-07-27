import { StyleSheet, Text, View } from "react-native";

export default function Greet({name}:any) {
  return (
    <View>
      <Text style={styles.container1}>Hi I am { name }</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container1: { color: "red" },
});
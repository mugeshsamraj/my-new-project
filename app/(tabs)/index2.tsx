import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Login from ".";

export default function App() {
  const [name, setName] = useState('')
  const [dark,setDark] = useState(false)
  return (
    // <SafeAreaView style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     value={name}
    //     onChangeText={setName}
    //     placeholder="mugesh@gmail"
    //     keyboardType="numeric"
    //   />
    //   <TextInput style={[styles.input, styles.multiLine]}
    //     placeholder="Message"
    //     multiline
    //   />
    //   <Text>Hi i am {name}</Text>
    //   <View style={styles.viewContainer}>
    //     <Text>Switch Mode</Text>
    //     <Switch value={dark}
    //       onValueChange={(prev) => (!dark)} thumbColor={"#f3f4f4"}
    //     />
    //   </View>
    // </SafeAreaView>
    <Login />
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: StatusBar.currentHeight,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//   },
//   multiLine: {
//     height: 100,
//     textAlignVertical: "top",
//     borderRadius: 16,
//     backgroundColor: "green",
//   },
//   viewContainer: {
//     flexDirection: 'row',
//     justifyContent:"space-between",
//   }
// });
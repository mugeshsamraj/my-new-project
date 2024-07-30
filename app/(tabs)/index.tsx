import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView } from "react-native";

interface Errors {
  userName?: string;
  password?: string;
}

export default function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!userName) newErrors.userName = "Username is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      // Do the form submission logic here
      console.log("Form submitted");

      // Clear the form
      setUserName("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <Image
          source={require("../../assets/images/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>User Name</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter a User Name"
          value={userName}
          onChangeText={setUserName}
        />
        {errors.userName && (
          <Text style={styles.redText}>{errors.userName}</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Enter a Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password && (
          <Text style={styles.redText}>{errors.password}</Text>
        )}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This is for Android shadow
    width: "80%",
  },
  image: {
    height: 100,
    width: 300,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  formInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc", // Adding a border color for better visibility
    padding: 10,
    marginBottom: 16,
  },
  redText:{
    color: "red",
    marginBottom:10,
  },
});

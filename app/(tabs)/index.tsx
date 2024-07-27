import Greet from "@/components/Greet";
import Pokemon from "@/components/Pokemon/Pokemon";
import { useState } from "react";
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"


export default function App() {
 const charmanderData = {
   name: "Charmander",
   image: require("../../assets/images/charmander.png"),
   type: "Fire",
   hp: 39,
   moves: ["Scratch", "Ember", "Growl", "Leer"],
   weaknesses: ["Water", "Rock"],
 };

 const squirtleData = {
   name: "Squirtle",
   image: require("../../assets/images/squirtle.png"),
   hp: 44,
   moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
   weaknesses: ["Electric", "Grass"],
 };

 const bulbasaurData = {
   name: "Bulbasaur",
   image: require("../../assets/images/bulbasaur.png"),
   type: "Grass",
   hp: 45,
   moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
   weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
 };

 const pikachuData = {
   name: "Pikachu",
   image: require("../../assets/images/pikachu.png"),
   type: "Electric",
   hp: 35,
   moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
   weaknesses: ["Ground"],
 };

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pokemon {...charmanderData} />
        <Pokemon {...squirtleData} />
        <Pokemon {...bulbasaurData} />
        <Pokemon {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
})
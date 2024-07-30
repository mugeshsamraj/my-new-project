import Greet from "@/components/Greet";
import Pokemon from "@/components/Pokemon/Pokemon";
import { useState } from "react";
import { ActivityIndicator, Alert, Button, FlatList, Image, ImageBackground, Modal, Platform, Pressable, SafeAreaView, SafeAreaViewBase, ScrollView, StyleSheet, Text, View } from "react-native"
import PokemonList from "@/components/data.json"


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
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <Pokemon {...charmanderData} />
    //     <Pokemon {...squirtleData} />
    //     <Pokemon {...bulbasaurData} />
    //     <Pokemon {...pikachuData} />
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {PokemonList.map((data) => {
     
      return (
        <View key={data.id} style={styles.card}>
          <Text style={styles.cardText}>{data.type}</Text>
          <Text style={styles.cardText}>{data.name}</Text>
        </View>
      );
      })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={PokemonList}
          renderItem={({ item }: any) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item: any) => item.id.toString()}
          // ItemSeparatorComponent={<View style={{height:16}} />}
          ListEmptyComponent={<Text>No Items Founds</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Pokemon Header</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: "white",
    marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontWeight: "bold",
    color: "red,",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
});
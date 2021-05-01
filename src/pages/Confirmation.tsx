import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { UserContext } from "../contexts/UserContext";

export function Confirmation() {
  const { myPlants } = useContext(UserContext);
  const navigation = useNavigation();

  function handleMoveOn() {
    const local = myPlants.length === 0 ? "PlantSelect" : "MyPlants";
    navigation.navigate(local);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subtitle}>
          Vamos começar a cuidar das suas {"\n"}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: "center",
    marginTop: 64,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: fonts.text,
    color: colors.heading,
    textAlign: "center",
    paddingVertical: 10,
  },
  footer: {
    width: "75%",
    marginTop: 40,
  },
});

import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function SavedPlant() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate("MyPlants");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🤗</Text>

        <Text style={styles.title}>Tudo certo</Text>

        <Text style={styles.subtitle}>
          Fique tranquilo que sempre vamos {"\n"}
          lembrar você de cuidar da sua plantinha {"\n"}
          com bastante amor.
        </Text>

        <View style={styles.footer}>
          <Button title="Muito obrigado :D" onPress={handleMoveOn} />
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

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();

  async function handleSubmitForm() {
    if (!name) return Alert.alert("Me diga o seu nome");

    try {
      await AsyncStorage.setItem("@plantmanager:user", name);
      navigation.navigate("Confirmation");
    } catch (error) {
      return Alert.alert("Não foi possível salvar o seu nome. 😢");      
    }
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {name.length === 0 ? "😃" : "😄"}
                </Text>

                <Text style={styles.title}>
                  Como podemos {"\n"} chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || name.length > 0) && {
                    borderColor: colors.green,
                  },
                ]}
                placeholder="Digite um nome"
                autoFocus
                value={name}
                onChangeText={setName}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />

              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmitForm} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 54,
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    marginVertical: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    width: "100%",
  },
  footer: {
    width: "90%",
    marginTop: 40,
  },
});

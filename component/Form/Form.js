import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export const Form = (props) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.length == 0) {
      Alert.alert("please enter task");
      return;
    }
    props.onAddTask(text);
    Keyboard.dismiss();
    // clear input
    setText("");
  };

  const handleChangeText = (text) => setText(text);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={text}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 1,
  },
  form: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#AADAEC",
    marginBottom: 30,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
  },
});

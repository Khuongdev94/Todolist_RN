import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export const Form = (props) => {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.length == 0) {
      alert("please enter task");
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
  container: {
    flex: 1,
    backgroundColor: "#AADAEC",
    padding: 5,
  },
  head: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  itemText: {
    width: "90%",
  },
  itemNumber: {
    color: "#fff",
  },
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
  clearWrapper: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  clearText: {
    fontSize: 20,
    color: "red",
    marginRight: 10,
  },

  item: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    paddingVertical: 5,
  },
  content: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  done: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    textDecorationLine: "line-through",
  },

  sttEven: {
    borderColor: "#55BCF6",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#55BCF6",
    marginLeft: 10,
  },
  sttOdd: {
    borderColor: "#55BCF6",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#96ED89",
    marginLeft: 10,
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

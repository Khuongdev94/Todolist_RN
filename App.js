import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Alert,
  SafeAreaView,
} from "react-native";

function App() {
  const [task, setTask] = useState({});
  const [listItems, setListItems] = useState([]);
  console.log(listItems);
  const handleAddTask = () => {
    if (task.length == 0) {
      alert("please enter task");
      return;
    }
    {
      setListItems([...listItems, task]);
      Keyboard.dismiss();
      setTask({ id: "", status: "", time: "", title: "" });
    }
  };

  const handleDeleteTask = (index) => {
    Alert.alert("Notification", "Are you sure you want to delete?", [
      {
        text: "OK",
        onPress: () => {
          setListItems(listItems.filter((item, i) => i !== index));
        },
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  const handleDone = (id) => {
    const cutItem = listItems.find((item) => item.id === id);
    cutItem.status = true;
    setListItems([...listItems]);
  };

  const handleDoNot = (id) => {
    const cutElement = listItems.find((item) => item.id === id);
    cutElement.status = false;
    setListItems([...listItems]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.head}>
        <Text style={styles.header}>Undo list</Text>
        {/* danh sách hiện tasks */}
        {/* list false */}
        <ScrollView>
          <View style={{ paddingHorizontal: 10 }}>
            {/* render task */}
            {listItems
              .filter((ele) => ele.status === false)
              .sort((a, b) => b.time - a.time)
              .map((item, index) => (
                <View style={styles.item} key={item.id}>
                  <TouchableOpacity
                    onPress={() => handleDone(item.id)}
                    key={item.id}
                  >
                    <View style={styles.content}>
                      <View
                        style={
                          (index + 1) % 2 == 0 ? styles.sttEven : styles.sttOdd
                        }
                      >
                        <Text style={styles.itemNumber}>{index + 1}</Text>
                      </View>
                      <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                    <View style={styles.clearWrapper}>
                      <Text style={styles.clearText}>X</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </ScrollView>

        {/* list Done */}
        <ScrollView>
          <Text style={styles.header}>Done list</Text>
          <View style={{ paddingHorizontal: 10 }}>
            {/* render task */}
            {listItems
              .filter((ele) => ele.status === true)
              .sort((a, b) => b.time - a.time)
              .map((item, index) => (
                <View
                  style={[styles.item, { backgroundColor: "#E8E8E8" }]}
                  key={item.id}
                >
                  <TouchableOpacity onPress={() => handleDoNot(item.id)}>
                    <View style={styles.content}>
                      <View
                        style={
                          (index + 1) % 2 == 0 ? styles.sttEven : styles.sttOdd
                        }
                      >
                        <Text style={styles.itemNumber}>{index + 1}</Text>
                      </View>
                      <Text
                        style={[
                          styles.itemText,
                          { textDecorationLine: "line-through" },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                    <View style={styles.clearWrapper}>
                      <Text style={styles.clearText}>X</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </ScrollView>
        {/* form nhập task */}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setTask({
                id: Date.now(),
                status: false,
                time: Date.now() / 1000,
                title: text,
              })
            }
            value={task.title}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
});

export default App;

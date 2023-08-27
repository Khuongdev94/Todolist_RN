import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { DeleteBtn } from "./component/DeleteBtn/DeleteBtn";
import { Form } from "./component/Form/Form";
import { TaskDone } from "./component/Task_redo/TaskDone";
import { TaskUnDo } from "./component/Task_undo/TaskUnDo";

function App() {
  // const [task, setTask] = useState({});
  const [listItems, setListItems] = useState([]);
  console.log(listItems);

  const handleAddTask = (text) => {
    const task = {
      id: Date.now(),
      status: false,
      time: Date.now() / 1000,
      title: text,
    };
    setListItems([...listItems, task]);
  };
  const handleDeleteTask = (id) => {
    Alert.alert("Notification", "Are you sure you want to delete?", [
      {
        text: "OK",
        onPress: () => {
          setListItems(listItems.filter((item) => item.id !== id));
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
    const cutElement = listItems.find((item) => item.id === id);
    cutElement.status = true;
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
        <TaskUnDo
          list={listItems}
          onDone={handleDone}
          onDelete={handleDeleteTask}
        />
        {/* list Done */}
        <TaskDone
          list={listItems}
          onUndo={handleDoNot}
          onDelete={handleDeleteTask}
        />
      </View>
      {/* form nhập task */}
      <Form onAddTask={handleAddTask}></Form>
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
});

export default App;

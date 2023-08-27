import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn";

export const TaskDone = (props) => {
  return (
    <>
      <ScrollView>
        <Text style={styles.header}>Done list</Text>
        <View style={{ paddingHorizontal: 10 }}>
          {/* render task */}
          {props.list
            .filter((ele) => ele.status === true)
            .sort((a, b) => b.time - a.time)
            .map((item, index) => (
              <View
                style={[styles.item, { backgroundColor: "#E8E8E8" }]}
                key={item.id}
              >
                <TouchableOpacity onPress={() => props.onUndo(item.id)}>
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
                <TouchableOpacity onPress={() => props.onDelete(item.id)}>
                  <DeleteBtn />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
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

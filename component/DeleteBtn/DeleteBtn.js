import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const DeleteBtn = (props) => {
  return (
    <View style={styles.clearWrapper}>
      <Text style={styles.clearText}>X</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

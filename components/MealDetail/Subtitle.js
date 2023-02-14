import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitleContainer: {
    borderColor: "#8080806e",
    borderBottomWidth: 1,
    paddingBottom: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

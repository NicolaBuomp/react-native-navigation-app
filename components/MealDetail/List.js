import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data, direction }) => {
  return (
    <View style={direction}>
      {data.map((dataPoint) => (
        <View>
          <Text key={dataPoint}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});

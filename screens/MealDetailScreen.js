import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function onPressButtonHeader(data) {
    console.log(data);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color={"white"}
            onPress={onPressButtonHeader}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List
            data={selectedMeal.ingredients}
            direction={styles.directionRow}
          />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} direction={styles.directionCol} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  textStyle: {
    backgroundColor: "#ff00009d",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  listOuterContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  listContainer: {
    width: "100%",
  },
  directionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  directionCol: {
    flexDirection: "column",
  },
});

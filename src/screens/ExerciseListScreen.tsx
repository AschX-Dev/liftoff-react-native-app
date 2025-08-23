import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { exercises } from "../data/exercises";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "ExerciseList">;

export default function ExerciseListScreen({ navigation }: Props) {
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={exercises}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("ExerciseDetail", { id: item.id })}
          style={styles.card}
        >
          <Image
            source={item.avatar}
            style={styles.avatar}
            resizeMode="contain"
          />
          <View style={styles.info}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>
              {item.primaryMuscles.join(", ")}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 4,
    color: "#666",
  },
});




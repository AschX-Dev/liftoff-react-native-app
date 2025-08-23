import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { getExerciseById } from "../data/exercises";

type Props = NativeStackScreenProps<RootStackParamList, "ExerciseDetail">;

export default function ExerciseDetailScreen({ route, navigation }: Props) {
  const exercise = getExerciseById(route.params.id);
  if (!exercise) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.framesRow}>
        {exercise.images.map((img, idx) => (
          <View key={idx} style={styles.frameBox}>
            <Image source={img} style={styles.frameImg} resizeMode="contain" />
          </View>
        ))}
      </View>
      <Text style={styles.title}>{exercise.name}</Text>

      <Text style={styles.label}>Primary Muscles</Text>
      <View style={styles.chipRow}>
        {exercise.primaryMuscles.map((m) => (
          <View key={m} style={styles.chip}>
            <Text style={styles.chipText}>{m}</Text>
          </View>
        ))}
      </View>

      {exercise.secondaryMuscles.length > 0 && (
        <>
          <Text style={styles.label}>Secondary Muscles</Text>
          <View style={styles.chipRow}>
            {exercise.secondaryMuscles.map((m) => (
              <View key={m} style={styles.chip}>
                <Text style={styles.chipText}>{m}</Text>
              </View>
            ))}
          </View>
        </>
      )}

      <Text style={styles.section}>How to perform</Text>
      <View style={styles.instructionsCard}>
        {exercise.instructions.map((step, i) => (
          <View key={i} style={styles.instructionRow}>
            <Text style={styles.stepNum}>{i + 1}.</Text>
            <Text style={styles.instruction}>{step}</Text>
          </View>
        ))}
      </View>
      <Pressable
        style={styles.videoButton}
        onPress={() =>
          navigation.navigate("Video", {
            url: exercise.videoUrl,
            title: exercise.name,
            exerciseId: exercise.id,
          })
        }
      >
        <Text style={styles.videoButtonText}>Watch Video</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  framesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end", // align bottoms like the reference
    gap: 12,
  },
  frameBox: {
    flex: 1,
    height: 220,
    justifyContent: "flex-end",
  },
  frameImg: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
  },
  section: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 6,
  },
  chip: {
    backgroundColor: "#eef2ff",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  chipText: {
    color: "#1e40af",
    fontWeight: "600",
  },
  instructionsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    gap: 10,
  },
  instructionRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  stepNum: {
    color: "#111",
    fontWeight: "700",
    marginTop: 2,
  },
  instruction: {
    flex: 1,
    color: "#111",
    fontSize: 16,
    lineHeight: 22,
  },
  videoButton: {
    marginTop: 12,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  videoButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { getExerciseById } from "../data/exercises";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Video">;

export default function VideoScreen({ route }: Props) {
  const { url, exerciseId } = route.params;
  const exercise = exerciseId ? getExerciseById(exerciseId) : undefined;

  if (exercise && exercise.localVideo) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.playerBox}>
          <Video
            source={exercise.localVideo}
            style={styles.player}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
          />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.playerBox}>
        <WebView
          source={{ uri: url }}
          style={styles.player}
          allowsFullscreenVideo
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  playerBox: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    overflow: "hidden",
  },
  player: {
    width: "100%",
    height: "100%",
  },
});

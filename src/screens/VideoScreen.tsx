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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.playerBox}>
          {exercise && exercise.localVideo ? (
            <Video
              source={exercise.localVideo}
              style={styles.player}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
            />
          ) : (
            <WebView
              source={{ uri: url }}
              style={styles.player}
              allowsFullscreenVideo
              mediaPlaybackRequiresUserAction={false}
              allowsInlineMediaPlayback
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  playerBox: {
    width: "100%",
    aspectRatio: 16 / 9,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  player: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

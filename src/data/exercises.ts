import { Exercise } from "../types";

// Note: Replace image requires with your exported PNGs from Figma (transparent backgrounds)
// and replace videoUrl with the actual video links you extract from the Lyfta site.

export const exercises: Exercise[] = [
  {
    id: "bench-press",
    name: "Barbell Bench Press",
    avatar: require("../../assets/exercises/bench/avatar.jpg"),
    images: [
      require("../../assets/exercises/bench/frame1.jpg"),
      require("../../assets/exercises/bench/frame2.jpg"),
    ],
    primaryMuscles: ["Chest", "Triceps"],
    secondaryMuscles: ["Shoulders"],
    instructions: [
      "Lie flat on the bench with feet planted.",
      "Grip the bar slightly wider than shoulder width.",
      "Lower the bar to mid-chest with control.",
      "Press back up until elbows are extended.",
    ],
    videoUrl: "https://lyfta.app/ex/7",
    localVideo: require("../../assets/videos/bench.mp4"),
  },
  {
    id: "front-squat",
    name: "Front Squat",
    avatar: require("../../assets/exercises/lunge/avatar.jpg"),
    images: [
      require("../../assets/exercises/lunge/frame1.jpg"),
      require("../../assets/exercises/lunge/frame2.jpg"),
      require("../../assets/exercises/lunge/frame3.jpg"),
    ],
    primaryMuscles: ["Legs", "Glutes"],
    secondaryMuscles: ["Core"],
    instructions: [
      "Rack the bar across front delts with elbows high.",
      "Sit down between the hips, chest tall.",
      "Drive through mid-foot to stand back up.",
    ],
    videoUrl: "https://lyfta.app/ex/6qg",
    localVideo: require("../../assets/videos/lunge.mp4"),
  },
  {
    id: "push-press",
    name: "Barbell Push Press",
    avatar: require("../../assets/exercises/push-press/avatar.jpg"),
    images: [
      require("../../assets/exercises/push-press/frame1.jpg"),
      require("../../assets/exercises/push-press/frame2.jpg"),
      require("../../assets/exercises/push-press/frame3.jpg"),
    ],
    primaryMuscles: ["Shoulders"],
    secondaryMuscles: ["Triceps", "Legs"],
    instructions: [
      "Dip slightly by bending knees.",
      "Drive the bar overhead using legs then arms.",
      "Lock out overhead and return with control.",
    ],
    videoUrl: "https://lyfta.app/ex/756",
    localVideo: require("../../assets/videos/push-press.mp4"),
  },
  {
    id: "ohp",
    name: "Overhead Shoulder Press",
    avatar: require("../../assets/icon.png"),
    images: [
      require("../../assets/splash-icon.png"),
      require("../../assets/adaptive-icon.png"),
    ],
    primaryMuscles: ["Shoulders"],
    secondaryMuscles: ["Triceps", "Core"],
    instructions: [
      "Stand tall and brace the core.",
      "Press the bar overhead without leaning back.",
      "Lower under control to the starting position.",
    ],
    videoUrl: "https://my.lyfta.app/exercises",
  },
  {
    id: "donkey-calf-raise",
    name: "Donkey Calf Raise",
    avatar: require("../../assets/icon.png"),
    images: [
      require("../../assets/splash-icon.png"),
      require("../../assets/adaptive-icon.png"),
    ],
    primaryMuscles: ["Calves"],
    secondaryMuscles: [],
    instructions: [
      "Place forearms on pad and hinge at hips.",
      "Rise onto toes by plantar flexing the ankles.",
      "Control the descent to stretch the calves.",
    ],
    videoUrl: "https://my.lyfta.app/exercises",
  },
];

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id);
}

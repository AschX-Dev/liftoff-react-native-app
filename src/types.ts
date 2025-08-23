export type MuscleGroup =
  | "Chest"
  | "Legs"
  | "Shoulders"
  | "Triceps"
  | "Back"
  | "Calves"
  | "Glutes"
  | "Core";

export interface Exercise {
  id: string;
  name: string;
  avatar: any; // require() result for local image
  images: any[]; // array of require() results for full images (2-4 frames)
  primaryMuscles: MuscleGroup[];
  secondaryMuscles: MuscleGroup[];
  instructions: string[];
  videoUrl: string; // extracted from Lyfta web app
  localVideo?: any; // require() result for local mp4, optional
}

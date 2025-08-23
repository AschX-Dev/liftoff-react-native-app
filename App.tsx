import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import ExerciseListScreen from "./src/screens/ExerciseListScreen";
import ExerciseDetailScreen from "./src/screens/ExerciseDetailScreen";
import VideoScreen from "./src/screens/VideoScreen";

export type RootStackParamList = {
  ExerciseList: undefined;
  ExerciseDetail: { id: string };
  Video: { url: string; title: string; exerciseId?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="ExerciseList"
          component={ExerciseListScreen}
          options={{ title: "Exercises" }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={{ title: "Exercise" }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ title: "How To Video" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

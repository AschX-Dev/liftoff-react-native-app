Liftoff Exercise App (Expo + TypeScript)

Run

- Install dependencies: npm install
- Start dev: npm run android or npm run web

Assets

- Place transparent PNGs in assets/exercises/<exercise>/ as avatar.png and frame1.png ...
- Update src/data/exercises.ts videoUrl with links extracted from Lyfta.

Structure

- App.tsx — Navigation container and routes
- src/screens/ExerciseListScreen.tsx — list with avatars
- src/screens/ExerciseDetailScreen.tsx — full images, instructions, muscle groups, video CTA
- src/screens/VideoScreen.tsx — in-app video playback via WebView
- src/data/exercises.ts — sample data
- src/types.ts — shared types


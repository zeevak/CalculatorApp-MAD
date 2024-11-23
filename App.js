import React from "react";
import { registerRootComponent } from "expo";
import Calculator from "./Calculator";

// App component that holds the main application logic
export default function App() {
  return <Calculator />;
}

// registerRootComponent ensures the app is set up correctly, whether in Expo Go or a native build
registerRootComponent(App);

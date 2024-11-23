import { StyleSheet } from "react-native";

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  themeSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  themeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  resultText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  resultSubText: {
    fontSize: 24,
    color: "#888",
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Slightly rounded corners
  },
  numberButton: {
    backgroundColor: "#f0f0f0",
  },
  operatorButton: {
    backgroundColor: "#f9a825",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
  },
  themeSwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  themeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#333333",
  },
  resultText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  resultSubText: {
    fontSize: 24,
    color: "#aaa",
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10, // Slightly rounded corners
  },
  numberButton: {
    backgroundColor: "#555",
  },
  operatorButton: {
    backgroundColor: "#ff5722",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});

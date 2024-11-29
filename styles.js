// @author Kavinu Senanayake
// @ID IM/2021/114
// @date 2024 November 22nd

import { StyleSheet } from "react-native";

// Light theme styles
export const lightStyles = StyleSheet.create({
  container: { // Container for the app
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  themeSwitchContainer: { // Container for the theme switch
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  themeText: { // Text for the theme switch
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: { // Container for the result
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  historyButton: { // Button to open history
    position: "absolute",
    top: 10,
    right: 10,
  },
  historyButtonText: { // Text for the history button
    fontSize: 28,
    color: "#000",
  },
  resultText: { // Text for the result
    fontSize: 36,
    fontWeight: "bold",
  },
  resultSubText: { // Subtext for the result
    fontSize: 24,
    color: "#888",
  },
  buttonsContainer: { // Container for the buttons
    flex: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: { // Row for the buttons
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  button: { // Button style
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Slightly rounded corners
  },
  numberButton: { // Number button style
    backgroundColor: "#f0f0f0",
  },
  operatorButton: { // Operator button style
    backgroundColor: "#f9a825",
  },
  buttonText: { // Text for the buttons
    fontSize: 24,
    fontWeight: "bold",
  },
  historyModal: { // Modal for the history
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  historyTitle: { // Title for the history
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  historyItem: { // Item in the history
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  historyText: { // Text for the history
    fontSize: 18,
  },
  closeButton: { // Close button for the history
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  closeButtonText: { // Text for the close button
    fontSize: 18,
    color: "#333",
  },
});

// Dark theme styles
export const darkStyles = StyleSheet.create({
  container: { // Container for the app
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
  },
  themeSwitchContainer: { // Container for the theme switch
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  themeText: { // Text for the theme switch
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  resultContainer: { // Container for the result
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#333333",
  },
  historyButton: { // Button to open history
    position: "absolute",
    top: 10,
    right: 10,
  },
  historyButtonText: { // Text for the history button
    fontSize: 28,
    color: "#fff", // Updated to a light color
  },
  resultText: { // Text for the result
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  resultSubText: { // Subtext for the result
    fontSize: 24,
    color: "#aaa",
  },
  buttonsContainer: { // Container for the buttons
    flex: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: { // Row for the buttons
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
  },
  button: { // Button style
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10, // Slightly rounded corners
  },
  numberButton: { // Number button style
    backgroundColor: "#555",
  },
  operatorButton: { // Operator button style
    backgroundColor: "#ff5722",
  },
  buttonText: { // Text for the buttons
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  historyModal: { // Modal for the history
    flex: 1,
    backgroundColor: "#333",
    padding: 20,
  },
  historyTitle: { // Title for the history
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  historyItem: { // Item in the history
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
  },
  historyText: { // Text for the history
    fontSize: 18,
    color: "#fff",
  },
  closeButton: { // Close button for the history
    marginTop: 20,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#444",
    borderRadius: 5,
  },
  closeButtonText: { // Text for the close button
    fontSize: 18,
    color: "#fff",
  },
});
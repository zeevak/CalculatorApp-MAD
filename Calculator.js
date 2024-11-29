// @author Kavinu Senanayake
// @ID IM/2021/114
// @date 2024 November 22nd

import React, { useState } from "react";
import {
  View, //to create a container
  Text, //to display text
  TouchableOpacity, //to handle button press
  Switch, //to handle theme switch
  Modal, //to display history
  FlatList, //to display history items
  StyleSheet, //to create styles
} from "react-native"; 
import { lightStyles, darkStyles } from "./styles"; // Import light and dark themes
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

// Calculator component
export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [history, setHistory] = useState([]); // Store calculation history
  const [isHistoryVisible, setIsHistoryVisible] = useState(false); // Modal visibility

  const styles = isDarkTheme ? darkStyles : lightStyles; // Apply theme

  // Handle button press
  const handlePress = (value) => {
    if (value === "=") { // Evaluate expression
      try {
        let updatedInput = input.replace(/÷/g, "/").replace(/×/g, "*");
        const evaluatedResult = eval(updatedInput); // Evaluate expression using eval()

        // Handle division by zero cases
        if (updatedInput.includes("/0")) {
          if (updatedInput.includes("0/0")) {
            setResult("Result is undefined"); // 0/0
          } else {
            setResult("Cannot divide by zero"); // n/0
          }
        } else {
          setResult(evaluatedResult);
          // Add to history
          setHistory((prev) => [
            ...prev,
            { id: Date.now().toString(), input, result: evaluatedResult },
          ]);
        }
      } catch {
        setResult("Error");
      }
    } else if (value === "C") { // Clear input
      setInput("");
      setResult("");
    } else if (value === "⌫") { // Backspace
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "√") {
      try {
        setResult(Math.sqrt(eval(input || "0"))); // Square root
      } catch {
        setResult("Error");
      }
    } else if (value === "%") { // Percentage
      try {
        setResult(eval(input || "0") / 100); // Convert to percentage
      } catch {
        setResult("Error"); // Handle invalid input
      }
    } else {
      setInput(input + value); // Append input
    }
  };

  // Render history item in FlatList
  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}>{item.input} = {item.result}</Text>
    </View>
  );

  // Render history modal
  return (
    <View style={styles.container}>
      {/* Theme Switch */}
      <View style={styles.themeSwitchContainer}>
        <Text style={styles.themeText}>
          {isDarkTheme ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={isDarkTheme}
          onValueChange={() => setIsDarkTheme(!isDarkTheme)}
        />
      </View>

      {/* Display Section */}
      <View style={styles.resultContainer}>
        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => setIsHistoryVisible(true)}
        >
          <Icon name="history" size={28} style={styles.historyButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.resultText}>{input || "0"}</Text>
        <Text style={styles.resultSubText}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {["C", "√", "⌫", "÷"].map((value) => (
            <TouchableOpacity
              key={value}
              style={[styles.button, styles.operatorButton]}
              onPress={() => handlePress(value)}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {[
          ["7", "8", "9", "×"], // Row 1
          ["4", "5", "6", "-"], // Row 2
          ["1", "2", "3", "+"], // Row 3
        ].map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.button,
                  value.match(/[÷×+\-]/)
                    ? styles.operatorButton
                    : styles.numberButton,
                ]}
                onPress={() => handlePress(value)}
              >
                <Text style={styles.buttonText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.numberButton]}
            onPress={() => handlePress(".")} // Decimal point
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.numberButton]}
            onPress={() => handlePress("0")} // Zero
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handlePress("%")} // Percentage
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handlePress("=")} // Equals
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* History Modal */}
      <Modal visible={isHistoryVisible} animationType="slide">
        <View style={styles.historyModal}>
          <Text style={styles.historyTitle}>Calculation History</Text>
          <FlatList
            data={history}
            renderItem={renderHistoryItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsHistoryVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
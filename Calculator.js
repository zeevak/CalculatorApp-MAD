import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { lightStyles, darkStyles } from "./styles";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const styles = isDarkTheme ? darkStyles : lightStyles;

  const handlePress = (value) => {
    if (value === "=") {
      try {
        // Replace division and multiplication symbols with proper operators
        let updatedInput = input.replace(/÷/g, "/").replace(/×/g, "*");

        // Evaluate the expression
        const evaluatedResult = eval(updatedInput);

        // Handle specific edge cases for division by zero
        if (updatedInput.includes("/0")) {
          if (updatedInput.includes("0/0")) {
            setResult("Result is undefined"); // Case: 0/0
          } else {
            setResult("Cannot divide by zero"); // Case: Any number/0
          }
        } else {
          setResult(evaluatedResult);
        }
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "√") {
      try {
        setResult(Math.sqrt(eval(input || "0")));
      } catch {
        setResult("Error");
      }
    } else if (value === "%") {
      try {
        setResult(eval(input || "0") / 100);
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

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
        <Text style={styles.resultText}>{input || "0"}</Text>
        <Text style={styles.resultSubText}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {/* Functional Buttons */}
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

        {/* Numbers and Operators */}
        {[
          ["7", "8", "9", "×"],
          ["4", "5", "6", "-"],
          ["1", "2", "3", "+"],
        ].map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.button,
                  value.match(/[÷×+\-]/) ? styles.operatorButton : styles.numberButton,
                ]}
                onPress={() => handlePress(value)}
              >
                <Text style={styles.buttonText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Dot, Zero, Percentage, Equals */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.numberButton]}
            onPress={() => handlePress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.numberButton]}
            onPress={() => handlePress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handlePress("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handlePress("=")}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

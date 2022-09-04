import "./styles.css";
import React, { useState } from "react";

var headingText = "Food interpreter";
const foodDictionary = {
  "🍕": "pizza",
  "🍔": "beefburger",
  "🍿": "popcorn",
  "🥪": "sandwich",
  "🍝": "sapghetti",
  "🍨": "ice cream",
  "🍤": "fried prawn",
  "🍫": "chocolate bar",
  "🥞": "pancakes",
  "🍟": "french fries",
  "🥗": "green salad",
  "🎂": "birthday cake",
  "🥐": "croissant",
  "🍛": "curry rice",
  "🍪": "biscuit"
};
var foodsWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Translation will appear here..");

  function foodInputHandler(event) {
    var meaning = foodDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Sorry! failure to recognise this emoji";
    }
    setMeaning(meaning);
  }

  function foodEmojiClickHandler(foodEmoji) {
    var meaning = foodDictionary[foodEmoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>{headingText}</h1>
      </nav>
      <div>
        <h2 style={{ paddingTop: "3rem" }}>
          Enter your food emoji here to know the meaning of it
        </h2>
      </div>
      <input placeholder="e.g. 🍨 (ice cream)" onChange={foodInputHandler} />
      <h2 className="Result">{meaning}</h2>
      <h3>Food emojis we know, you can choose from these also</h3>
      {foodsWeKnow.map(function (foodEmoji) {
        return (
          <span
            key={foodEmoji}
            onClick={() => foodEmojiClickHandler(foodEmoji)}
          >
            {foodEmoji}
          </span>
        );
      })}
    </div>
  );
}

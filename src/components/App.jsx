import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emoji) {
  return <Card icon={emoji.emoji} name={emoji.name} info={emoji.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;

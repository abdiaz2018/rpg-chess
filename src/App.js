import React from "react";
import Board from "./Board";

function generateBoard(symbol) {
  return Array(8)
  .fill(null)
  .map(() => Array(8).fill({symbol}));
}

export default function App() {
  const boardA = generateBoard("A");
  const boardB = generateBoard("B");
  const boardC = generateBoard("C");
  const boardD = generateBoard("D");
  
  return (
    <div style={{ padding: 20}}>
      <h1>Large Chess</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 320px)",
        gridTemplateRows: "repeat(2, 320px",
        gap: 0,
        margin: 0,
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Board boardData={boardA} />
        <Board boardData={boardB} />
        <Board boardData={boardC} />
      <Board boardData={boardD} />
      </div>
    </div>
  );
}



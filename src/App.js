import React, { useState } from "react";
import Board from "./Board";

const TILE_SIZE = 40;
const BOARD_SIZE = 8;
const WORLD_SIZE = BOARD_SIZE * 2;

export default function App() {

  const [world, setWorld] = useState(generateWorld());
  
  return (
    <div style={{ padding: 20}}>
      <h1>Large Chess</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${WORLD_SIZE}, ${TILE_SIZE}px)`,
        gridTemplateRows: `repeat(${WORLD_SIZE}, ${TILE_SIZE}px)`,
        border: "2px solid black",
        margin: "0 auto",
        width: WORLD_SIZE * TILE_SIZE,
        height: WORLD_SIZE * TILE_SIZE,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Board boardData={world} />
      </div>
    </div>
  );
}

function generateWorld() {
  const world = [];
  for (let y = 0; y < WORLD_SIZE; y++) {
    const row = [];
    for (let x = 0; x< WORLD_SIZE; x++) {
      let region = "A";
      if (x >= 8 && y < 8) region = "B";
      if (x < 8 && y >= 8) region = "C";
      if (x >= 8 && y >= 8) region= "D";
      row.push({
        region,
        piece: null, 
        color: null, 
        terrain: "plain"
      });
    }
    world.push(row);
  }
  return world; 
}



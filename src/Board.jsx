import React, { useState } from "react";

export default function Board({ boardData }) {
    const rows = boardData.length;
    const cols = boardData[0].length;

    return (
        <>
            {boardData.flat().map((cell, index) => (
            <div
                key={index}
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: (Math.floor(index / cols) + index) % 2 === 0 ? "#eee" : "#444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    border: "0.5px solid #222",
                    boxSizing: "border-box"
                }}
            >
                {cell.region}
            </div>
            ))}
        </>
    );
}
import React from "react";

export default function Board({ boardData, label}) {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 40px)",
            gridTemplateRows: "repeat(8, 40px)",
            border: "1px solid black",
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
        }}>
            {boardData.flat().map((cell, index) => (
                <div
                    key={index}
                    style={{
                        width: 40,
                        height: 40, 
                        backgroundColor: (Math.floor(index/8) + index) % 2 ===0 ? "#7f0505ff" : "#000000ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    }}
                >
                </div>
            ))}
        </div>
    );
}
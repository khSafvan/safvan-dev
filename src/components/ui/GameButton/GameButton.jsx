import React from "react";
import "./GameButton.css";
import { shadeColor } from "../../../utils/colors";

const GameButton = ({ color = "#87CEFA", children }) => {
  const darker = shadeColor(color, -0.2); // 20% darker

  return (
    <div
      className="btn-hole"
      style={{
        backgroundColor: darker,
      }}
    >
      <div
        className="btn-top-surface"
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GameButton;

import React from "react";
import "./css/DiagramBar.css";
import { DiagramBarModalProps } from "../../types/propsTypes/DiagramBarProps";

const DiagramBar: React.FC<DiagramBarModalProps> = ({
  label,
  maxValue,
  value,
}): JSX.Element => {
  let barHeight = "0%";

  if (maxValue > 0) {
    barHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div className="diagram-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="diagram-bar__label">{label}</div>
    </div>
  );
};

export default DiagramBar;

import React from "react";
import "./css/Diagram.css";
import DiagramBar from "./DiagramBar";
import { DiagramModalProps } from "../../types/propsTypes/DiagramProps";
import { DiagramObjType } from "../../types/DiagramType";

const Diagram: React.FC<DiagramModalProps> = ({ dataSet }): JSX.Element => {
  const dataSetValues: number[] = dataSet.map((el: DiagramObjType) => {
    return el.value;
  });

  const maxCost: number = Math.max(...dataSetValues);

  return (
    <div className="diagram">
      {dataSet.map((el: DiagramObjType): JSX.Element => {
        return (
          <DiagramBar
            key={el.label}
            value={el.value}
            maxValue={maxCost}
            label={el.label}
          />
        );
      })}
    </div>
  );
};

export default Diagram;

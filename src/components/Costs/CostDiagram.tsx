import React from "react";
import Diagram from "../Diagram/Diagram";
import { CostsModalProps } from "../../types/propsTypes/CostsProps";
import { costType } from "../../types/CostType";
import { DiagramObjType } from "../../types/DiagramType";

const CostDiagram: React.FC<CostsModalProps> = ({ costs }): JSX.Element => {
  const diagramData: DiagramObjType[] = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  costs.forEach((el: costType) => {
    const costMonth = el.date.getMonth();
    diagramData[costMonth].value += el.amount;
  });
  return <Diagram dataSet={diagramData} />;
};

export default CostDiagram;

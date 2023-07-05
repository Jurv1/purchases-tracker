import React, { useState } from "react";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import "./css/Costs.css";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";
import { costType } from "../../types/CostType";
import { CostsModalProps } from "../../types/propsTypes/CostsProps";

const Costs: React.FC<CostsModalProps> = ({ costs }): JSX.Element => {
  const [chosenYear, setChosenYear] = useState<string>("2023");

  const yearChoseHandler = (year: string) => {
    setChosenYear(year);
  };

  const filteredCosts = costs.filter((el: costType) => {
    if (el.date.getFullYear() === +chosenYear) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={yearChoseHandler} year={chosenYear} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;

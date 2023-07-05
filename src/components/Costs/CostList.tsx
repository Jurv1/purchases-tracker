import React from "react";
import CostItem from "./CostItem";
import "./css/CostList.css";
import { CostsModalProps } from "../../types/propsTypes/CostsProps";
import { costType } from "../../types/CostType";

const CostList: React.FC<CostsModalProps> = ({ costs }): JSX.Element => {
  if (costs.length === 0) {
    return <h2 className="cost-list__fallback">No spendings this year</h2>;
  }

  return (
    <ul>
      {costs.map((el: costType) => {
        return (
          <CostItem
            key={el.id}
            date={el.date}
            description={el.description}
            amount={el.amount}
          />
        );
      })}
    </ul>
  );
};

export default CostList;

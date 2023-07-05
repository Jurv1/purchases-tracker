import React from "react";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./css/CostItem.css";
import { CostItemModalProps } from "../../types/propsTypes/CostItemProps";

const CostItem: React.FC<CostItemModalProps> = ({
  date,
  description,
  amount,
}): JSX.Element => {
  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default CostItem;

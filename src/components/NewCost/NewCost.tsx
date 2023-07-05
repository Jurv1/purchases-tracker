import React, { useState } from "react";
import CostForm from "./CostForm";
import "./css/NewCost.css";
import { NewCostModalProps } from "../../types/propsTypes/NewCostType";
import { costType, costWithoutIdType } from "../../types/CostType";

const NewCost: React.FC<NewCostModalProps> = ({ onAddCost }): JSX.Element => {
  const submitCostDataHandler = (costData: costWithoutIdType) => {
    const costDataWithId: costType = {
      ...costData,
      id: Math.random().toString(),
    };

    onAddCost(costDataWithId);
  };

  const [isActive, setIsActive] = useState<boolean>(false);
  const isActiveChangeHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsActive(!isActive);
  };

  const changeActiveState = () => {
    setIsActive(false);
  };
  return (
    <div className="new-cost">
      {isActive && (
        <CostForm
          onSubmitCostData={submitCostDataHandler}
          onCancel={changeActiveState}
        />
      )}
      {!isActive && (
        <button onClick={isActiveChangeHandler}>Add New Transaction</button>
      )}
    </div>
  );
};

export default NewCost;

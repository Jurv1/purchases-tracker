import React, { useState } from "react";
import "./css/CostForm.css";
import { CostFormModalProms } from "../../types/propsTypes/CostFormProps";
import { costWithoutIdType } from "../../types/CostType";

const CostForm: React.FC<CostFormModalProms> = ({
  onSubmitCostData,
  onCancel,
}): JSX.Element => {
  const [name, setName] = useState<string>("");
  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [sum, setSum] = useState<string>("");
  const sumChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSum(event.target.value);
  };

  const [date, setDate] = useState<string>("");
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const costData: costWithoutIdType = {
      description: name,
      amount: +sum,
      date: new Date(date),
    };

    onSubmitCostData(costData);

    setName("");
    setSum("");
    setDate("");

    onCancel();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={sumChangeHandler}
            value={sum}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2002-08-21"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Transaction</button>
          <button onClick={onCancel}>Close</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

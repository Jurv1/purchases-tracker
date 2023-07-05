import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { costType } from "./types/CostType";

const INITIAL_COSTS: costType[] = [
  {
    id: "1",
    date: new Date(2023, 5, 12),
    description: "It's long item name so i just keep typing",
    amount: 999.99,
  },
  {
    id: "2",
    date: new Date(2023, 6, 12),
    description: "Ok",
    amount: 150,
  },
  {
    id: "3",
    date: new Date(2023, 6, 12),
    description: "Nice One",
    amount: 500,
  },
];

const App = (): JSX.Element => {
  const [costs, setCosts] = useState<costType[]>(INITIAL_COSTS);

  const onAddCostHandler = (cost: costType) => {
    setCosts((prevCosts: costType[]) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={onAddCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;

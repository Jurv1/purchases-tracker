import { costType } from "../CostType";

export interface NewCostModalProps {
  onAddCost: (el: costType) => void;
}

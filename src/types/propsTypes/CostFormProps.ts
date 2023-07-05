import { costWithoutIdType } from "../CostType";

export interface CostFormModalProms {
  onSubmitCostData: (el: costWithoutIdType) => void;
  onCancel: () => void;
}

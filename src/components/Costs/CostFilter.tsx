import React from "react";
import "./css/CostFilter.css";
import { CostsFilterModalProps } from "../../types/propsTypes/CostsFilterProps";

const CostsFilter: React.FC<CostsFilterModalProps> = ({
  onChangeYear,
  year,
}): JSX.Element => {
  const yearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Filter By Year</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;

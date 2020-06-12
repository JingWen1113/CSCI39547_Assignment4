import React from "react";

const SelectOptions = ({ selectedColor, getSelectedColor }) => {
  return (
    <select value={selectedColor} onChange={getSelectedColor}>
      <option value="green">green</option>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="purple">purple</option>
    </select>
  );
};

export default SelectOptions;

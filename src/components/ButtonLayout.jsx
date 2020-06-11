import React from "react";

const ButtonLayout = (props) => {
  //destructure all props received from app
  const {
    addRow,
    addCol,
    removeRow,
    removeCol,
    fillAll,
    fillUncolored,
    clearGrid,
    colorBox,
    getSelectedColor,
    selectedColor,
  } = props;

  return (
    <div className="container">
      <button className="btn-sm btn-primary m-2" onClick={addRow}>
        Add Row
      </button>
      <button className="btn-sm btn-primary m-2" onClick={addCol}>
        Add Column
      </button>
      <button className="btn-sm btn-primary m-2" onClick={removeRow}>
        Remove Row
      </button>
      <button className="btn-sm btn-primary m-2" onClick={removeCol}>
        Remove Column
      </button>
      <button className="btn-sm btn-primary m-2" onClick={fillAll}>
        Fill All
      </button>
      <button className="btn-sm btn-primary m-2" onClick={fillUncolored}>
        Fill Uncolored
      </button>
      <button className="btn-sm btn-primary m-2" onClick={clearGrid}>
        Clear
      </button>
      <select value={selectedColor}>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="purple">purple</option>
      </select>
    </div>
  );
};

export default ButtonLayout;

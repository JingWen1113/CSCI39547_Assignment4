import React, { Component } from "react";
import "../css/ButtonLayout.css";
import SelectOptions from "./SelectOptions";
import GridInfo from "./GridInfo";

class ButtonLayout extends Component {
  state = { rows: this.props.rows, cols: this.props.cols };

  //listen for props update in app
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.rows !== nextProps.rows ||
      prevState.cols !== nextProps.cols
    ) {
      return {
        rows: nextProps.rows,
        cols: nextProps.cols,
      };
    }
  }

  render() {
    //destructure props for ease of use
    const {
      addRow,
      addCol,
      removeRow,
      removeCol,
      resetGrid,
      fillAll,
      fillUncolored,
      clearGrid,
      colorBox,
      getSelectedColor,
      selectedColor,
    } = this.props;

    const { rows, cols } = this.state;
    var gridExists = rows;
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
        <button className="btn-sm btn-primary m-1" onClick={removeCol}>
          Remove Column
        </button>
        {(rows > 0) & (cols > 0) ? (
          <div className="grid view btn" id="gv-btn">
            <button className="btn-sm  m-2" onClick={fillAll}>
              Fill All
            </button>
            <button className="btn-sm btn-primary m-2" onClick={fillUncolored}>
              Fill Uncolored
            </button>
            <button className="btn-sm btn-primary m-2" onClick={clearGrid}>
              Clear
            </button>
            <button
              className="btn-sm btn-primary m-2"
              style={{ backgroundColor: "red" }}
              onClick={resetGrid}
            >
              Reset Grid
            </button>
          </div>
        ) : null}
        <SelectOptions
          selectedColor={selectedColor}
          getSelectedColor={getSelectedColor}
        />
        <GridInfo rows={rows} cols={cols} />
      </div>
    );
  }
}

export default ButtonLayout;

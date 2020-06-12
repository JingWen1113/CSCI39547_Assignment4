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

    return null;
  }

  render() {
    const { rows, cols } = this.state;
    return (
      <div className="container">
        <button className="btn-sm btn-primary m-2" onClick={this.props.addRow}>
          Add Row
        </button>
        <button className="btn-sm btn-primary m-2" onClick={this.props.addCol}>
          Add Column
        </button>
        <button
          className="btn-sm btn-primary m-2"
          onClick={this.props.removeRow}
        >
          Remove Row
        </button>
        <button
          className="btn-sm btn-primary m-1"
          onClick={this.props.removeCol}
        >
          Remove Column
        </button>
        {(rows > 0) & (cols > 0) ? (
          <div className="grid view btn" id="gv-btn">
            <button className="btn-sm  m-2" onClick={this.props.fillAll}>
              Fill All
            </button>
            <button
              className="btn-sm btn-primary m-2"
              onClick={this.props.fillUncolored}
            >
              Fill Uncolored
            </button>
            <button
              className="btn-sm btn-primary m-2"
              onClick={this.props.clearGrid}
            >
              Clear
            </button>
          </div>
        ) : null}
        <button
          className="btn-sm btn-primary m-2"
          style={{ backgroundColor: "red" }}
          onClick={this.props.resetGrid}
        >
          Reset Grid
        </button>
        <SelectOptions
          selectedColor={this.props.selectedColor}
          getSelectedColor={this.props.getSelectedColor}
        />
        <GridInfo rows={rows} cols={cols} />
      </div>
    );
  }
}

export default ButtonLayout;

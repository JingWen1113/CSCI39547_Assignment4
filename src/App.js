import React, { Component } from "react";
import ButtonLayout from "./components/ButtonLayout";
import GridLayout from "./components/GridLayout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 0,
      cols: 0,
      selectedColor: "",
    };
  }

  //add row function
  addRow = () => {
    var newRows = this.state.rows + 1;
    this.setState({
      rows: newRows,
    });
  };

  //add column function
  addCol = () => {
    var newCols = this.state.cols + 1;
    this.setState({
      cols: newCols,
    });
  };

  //remove row function
  removeRow = () => {
    var newRows = this.state.rows - 1;
    this.setState({
      rows: newRows,
    });
  };

  //remove column function
  removeCol = () => {
    var newCols = this.state.cols - 1;
    this.setState({
      cols: newCols,
    });
  };

  //fill all boxes with selected color
  fillAll = () => {};
  //fill all boxes not with selected color
  fillUncolored = () => {};

  //clear all coloring
  clearGrid = () => {};

  //on each click get box id, color in
  colorBox = (event) => {};

  //get selected color option
  getSelectedColor = () => {};

  render() {
    const { rows, cols, selectedColor } = this.state;
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
    } = this;
    return (
      <div className="container">
        <ButtonLayout
          addRow={addRow}
          addCol={addCol}
          removeRow={removeRow}
          removeCol={removeCol}
          fillAll={fillAll}
          fillUncolored={fillUncolored}
          clearGrid={clearGrid}
          colorBox={colorBox}
          getSelectedColor={getSelectedColor}
          selectedColor={selectedColor}
        />
        <GridLayout rows={rows} cols={cols} />
      </div>
    );
  }
}

export default App;

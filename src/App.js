import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonLayout from "./components/ButtonLayout";
import GridLayout from "./components/GridLayout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 0,
      cols: 0,
      selectedColor: "green",
      mouseReleased: true,
      mouseDown: false,
    };

    this.myRef = React.createRef();
  }

  //add row function
  addRow = () => {
    const { rows, cols } = this.state;
    var newRows = rows + 1;

    if (cols === 0) {
      this.setState({
        rows: newRows,
        cols: cols + 1,
      });
    } else {
      this.setState({
        rows: newRows,
      });
    }
  };

  //add column function
  addCol = () => {
    const { rows, cols } = this.state;
    var newCols = cols + 1;

    if (rows === 0) {
      this.setState({
        cols: newCols,
        rows: rows + 1,
      });
    } else {
      this.setState({
        cols: newCols,
      });
    }
  };

  //remove row function
  removeRow = () => {
    var newRows = this.state.rows - 1;
    this.setState({
      rows: newRows < 0 ? 0 : newRows,
    });
  };

  //remove column function
  removeCol = () => {
    var newCols = this.state.cols - 1;
    this.setState({
      cols: newCols < 0 ? 0 : newCols,
    });
  };

  resetGrid = () => {
    this.setState({
      rows: 0,
      cols: 0,
    });
  };

  //fill all boxes with selected color
  fillAll = () => {
    const { rows, cols, selectedColor } = this.state;
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    console.log("children", grid);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i].childNodes[j].style.backgroundColor = selectedColor;
      }
    }
  };

  //fill all boxes not with selected color
  fillUncolored = () => {
    const { rows, cols, selectedColor } = this.state;
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    console.log("children", grid);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i].childNodes[j].style.backgroundColor === "")
          grid[i].childNodes[j].style.backgroundColor = selectedColor;
      }
    }
  };

  //clear all coloring
  clearGrid = () => {
    const { rows, cols } = this.state;
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    console.log("children", grid);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i].childNodes[j].style.backgroundColor = "";
      }
    }
  };

  //on each click get element, color in
  colorBox = (event) => {
    event.persist();
    event.target.style.backgroundColor = this.state.selectedColor;
    event.target.filled = "true";
  };

  onMouseRelease = (event) => {
    this.setState({
      mouseReleased: true,
      mouseDown: false,
    });
  };

  onMouseDown = (event) => {
    this.setState({
      mouseDown: true,
      mouseReleased: false,
    });
    event.target.style.backgroundColor = this.state.selectedColor;
  };

  colorMultiple = (event) => {
    if (this.state.mouseDown === true) {
      event.target.style.backgroundColor = this.state.selectedColor;
    }
  };

  //get selected color option and set to state
  getSelectedColor = (e) => {
    this.setState({
      selectedColor: e.target.value,
    });
  };

  render() {
    const { rows, cols, selectedColor, mouseDown, mouseReleased } = this.state;
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
      onMouseRelease,
      onMouseDown,
      colorMultiple,
      getSelectedColor,
    } = this;
    console.log("onmouseup", mouseReleased);
    console.log("onmousedown", mouseDown);
    return (
      <div className="container" ref={this.myRef}>
        <ButtonLayout
          addRow={addRow}
          addCol={addCol}
          removeRow={removeRow}
          removeCol={removeCol}
          resetGrid={resetGrid}
          fillAll={fillAll}
          fillUncolored={fillUncolored}
          clearGrid={clearGrid}
          getSelectedColor={getSelectedColor}
          selectedColor={selectedColor}
          rows={rows}
          cols={cols}
        />
        <GridLayout
          rows={rows}
          cols={cols}
          colorBox={colorBox}
          colorMultiple={colorMultiple}
          onMouseRelease={onMouseRelease}
          onMouseDown={onMouseDown}
        />
      </div>
    );
  }
}

export default App;

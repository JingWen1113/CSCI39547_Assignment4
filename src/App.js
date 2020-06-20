import React, { Component } from "react";
import ReactDOM from "react-dom";
import ButtonLayout from "./components/ButtonLayout";
import GridLayout from "./components/GridLayout";
import {
  ThemeackgroundColor,
  ThemebuttonColor,
  ThemeContentColor,
} from "./components/themeColor";

class App extends Component {
  constructor(props) {
    super(props);

    //state initialization
    this.state = {
      rows: 0,
      cols: 0,
      selectedColor: "green",
      mouseReleased: true,
      mouseDown: false,
    };

    //ref to the dom nodes to bypass native DOM methods usage
    this.myRef = React.createRef();
  }

  //add row function
  addRow = () => {
    const { rows, cols } = this.state;
    var newRows = rows + 1;

    //if cols is 0 when rows is 1, make cols=1 to render
    //else set rows to newRows
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

    //if rows is 0 when cols is 1, make rows=1 to render
    //else set cols to newCols
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
    //if rows becomes negative, set rows to 0, else newRows
    this.setState({
      rows: newRows < 0 ? 0 : newRows,
    });
  };

  //remove column function
  removeCol = () => {
    var newCols = this.state.cols - 1;
    //if cols becomes negative, set rows to 0, else newCols
    this.setState({
      cols: newCols < 0 ? 0 : newCols,
    });
  };

  resetGrid = () => {
    const { rows, cols } = this.state;

    //on rows=0 and cols=0, alert else set rows and cols to 0 respectively
    if (rows === 0 && cols === 0) {
      alert("you good bro");
    } else {
      this.setState({
        rows: 0,
        cols: 0,
      });
    }
  };

  //fill all boxes with selected color
  fillAll = () => {
    const { rows, cols, selectedColor } = this.state;
    //get all nodes by ref
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    //run through all rows and cols children and change their color to blank/white
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i].childNodes[j].style.backgroundColor = selectedColor;
      }
    }
  };

  //fill all boxes not with selected color
  fillUncolored = () => {
    const { rows, cols, selectedColor } = this.state;
    //get all nodes by ref
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    //run through all rows and cols children and change their color to selectedColor
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        //check if it is blank/white
        if (grid[i].childNodes[j].style.backgroundColor === "")
          grid[i].childNodes[j].style.backgroundColor = selectedColor;
      }
    }
  };

  //clear all coloring
  clearGrid = () => {
    const { rows, cols } = this.state;
    //get all nodes by ref
    const grid = ReactDOM.findDOMNode(this.myRef.current).childNodes[1]
      .childNodes;

    //run through all rows and cols children and change their color to blank/white
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i].childNodes[j].style.backgroundColor = "";
      }
    }
  };

  //on mouse up, switch the boolean to stop coloring
  onMouseRelease = (event) => {
    this.setState({
      mouseReleased: true,
      mouseDown: false,
    });
  };

  //on mouse down, switch the boolean to start coloring
  onMouseDown = (event) => {
    this.setState({
      mouseDown: true,
      mouseReleased: false,
    });
    event.target.style.backgroundColor = this.state.selectedColor;
  };

  colorMultiple = (event) => {
    //if mousedown state is true, onMouseOver will color until mouse is up
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
    const { rows, cols, selectedColor } = this.state;
    return (
      <ThemeackgroundColor className="container" ref={this.myRef}>
        <ButtonLayout
          addRow={this.addRow}
          addCol={this.addCol}
          removeRow={this.removeRow}
          removeCol={this.removeCol}
          resetGrid={this.resetGrid}
          fillAll={this.fillAll}
          fillUncolored={this.fillUncolored}
          clearGrid={this.clearGrid}
          getSelectedColor={this.getSelectedColor}
          selectedColor={selectedColor}
          rows={rows}
          cols={cols}
        />

        <GridLayout
          rows={rows}
          cols={cols}
          colorMultiple={this.colorMultiple}
          onMouseRelease={this.onMouseRelease}
          onMouseDown={this.onMouseDown}
        />
      </ThemeackgroundColor>
    );
  }
}

export default App;

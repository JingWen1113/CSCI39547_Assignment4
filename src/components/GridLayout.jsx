import React from "react";
import "../css/GridLayout.css";

const GridLayout = ({
  rows,
  cols,
  colorBox,
  colorMultiple,
  onMouseRelease,
  onMouseDown,
}) => {
  return (rows > 0) & (cols > 0) ? (
    <table id="grid" onMouseUp={(e) => onMouseRelease(e)}>
      {Array.from(Array(rows), (e, i) => {
        return (
          <div className="row" key={i}>
            {Array.from(Array(cols), (f, j) => {
              return (
                <div
                  className="container col "
                  key={j}
                  onMouseOver={(e) => colorMultiple(e)}
                  onMouseDown={(e) => onMouseDown(e)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </table>
  ) : null;
};

export default GridLayout;

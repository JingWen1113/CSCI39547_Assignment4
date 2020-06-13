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
    <table className="container" id="grid">
      {Array.from(Array(rows), (e, i) => {
        return (
          <div className="row" key={i} id="row">
            {Array.from(Array(cols), (f, j) => {
              return (
                <div
                  className="container col"
                  key={j}
                  onMouseOver={(e) => colorMultiple(e)}
                  onMouseDown={(e) => onMouseDown(e)}
                  onMouseUp={(e) => onMouseRelease(e)}
                  id="col"
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

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
    <div className="container" id="grid">
      {Array.from(Array(rows), (e, i) => {
        return (
          <div
            className="row"
            key={i}
            onMouseOver={(e) => colorMultiple(e)}
            onMouseUp={(e) => onMouseRelease(e)}
            onMouseDown={(e) => onMouseDown(e)}
          >
            {Array.from(Array(cols), (f, j) => {
              return (
                <div
                  className="col"
                  key={j}
                  onClick={(e) => colorBox(e)}
                  onMouseOver={(e) => colorMultiple(e)}
                  onMouseUp={(e) => onMouseRelease(e)}
                  onMouseDown={(e) => onMouseDown(e)}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  ) : null;
};

export default GridLayout;

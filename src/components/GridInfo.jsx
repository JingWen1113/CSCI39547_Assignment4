import React from "react";

const GridInfo = ({ rows, cols }) => {
  return (
    <div className="container dimension">
      <p style={{ fontWeight: 900, fontSize: 14 }}>Row Size {rows}</p>
      <p style={{ fontWeight: 900, fontSize: 14 }}>Column Size {cols}</p>
      <p style={{ fontWeight: 900, fontSize: 14 }}>
        Total Squares {cols * rows}
      </p>
    </div>
  );
};

export default GridInfo;

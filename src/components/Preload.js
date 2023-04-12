import React from "react";
function Preload(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div id="pre_container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                floodColor="rgb(157, 38, 178)"
              />
            </filter>
          </defs>
          <circle
            id="spinner"
            style={{
              fill: "transparent",
              stroke: "rgba(222, 130, 235, 0.911)",
              strokeWidth: "7px",
              strokeLinecap: "round",
              filter: "url(#shadow)",
            }}
            cx="50"
            cy="50"
            r="40"
          />
        </svg>
      </div>
    </div>
  );
}

export default Preload;

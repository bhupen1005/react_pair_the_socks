import React from "react";

export default function ArrangeSocks(props) {
  let id = 0;
  return (
    <div className=" border border-black">
      {props.collection.map((sock) => (
        <div
          key={id++}
          style={{
            background: `${sock}`,
            width: "20px",
            height: "20px",
            display: "inline-block",
          }}
          className="p-2 m-2 rounded-circle"
        ></div>
      ))}
    </div>
  );
}

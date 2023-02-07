import React from "react";

function GraphButton(props) {
  return (
    <div>
      {props.isReset && props.placeholderValue === "Location" ? (
        <div className="pl-3">
          <a href="/ComingSoon/">
            <button className=" ui orange button" onClick={props.resetData}>
              View Graph
            </button>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GraphButton;

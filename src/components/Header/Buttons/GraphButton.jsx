import React from "react";

import "../../../styles/Buttons.scss";
function GraphButton(props) {
  return (
    <div>
      {props.isReset && props.placeholderValue === "Location" ? (
        <div className="pl-3">
          <a href="/ComingSoon/">
            <button className=" graph_button" onClick={props.resetData}>
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

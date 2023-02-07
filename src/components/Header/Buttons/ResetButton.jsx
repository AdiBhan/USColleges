import React from "react";

function ResetButton(props) {
  return (
    <div>
      {" "}
      {props.isReset ? (
        <button className="ui primary button " onClick={props.resetData}>
          Reset
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ResetButton;

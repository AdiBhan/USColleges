import React from "react";
import "../../../styles/Header.scss";
function ResetButton(props) {
  return (
    <div>
      {" "}
      {props.isReset ? (
        <button className="reset_button" onClick={props.resetData}>
          Reset
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ResetButton;

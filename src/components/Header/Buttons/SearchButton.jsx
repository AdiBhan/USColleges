import React from "react";
import "../../../styles/Buttons.scss";
function SearchButton(props) {
  return (
    <div>
      {" "}
      <button onClick={props.returnResults} className="submit_button">
        Search<span className="material-symbols-outlined"></span>
      </button>
    </div>
  );
}

export default SearchButton;

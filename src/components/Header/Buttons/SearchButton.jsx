import React from "react";

function SearchButton(props) {
  const submitStyle =
    "m-3 border-2 border-black rounded-full hover:scale-90 ui positive button";

  return (
    <div>
      {" "}
      <button
        onClick={props.returnResults}
        className={`md:flex ${submitStyle} scale-95 `}
      >
        Search
      </button>
    </div>
  );
}

export default SearchButton;

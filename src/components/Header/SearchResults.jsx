import React, { useEffect } from "react";
import "../../styles/SearchResults.scss";
const SearchResults = (props) => {
  useEffect(() => {
    // Perform any updates or side effects when the stateFromParent changes
    console.log("SearchResults useEffect: " + props.matchesFound);
  }, [props.matchesFound]);
  return (
    <div className="flex flex-row justify-center p-2 m-4 ">
      <div>
        <h4 className="header_style">You searched for: </h4>{" "}
        <div className="underline text_style">{props.search}</div>
      </div>
      <br></br>
      <div className="pl-10">
        <h4 className="header_style">Matches found: </h4>{" "}
        <div className="underline text_style">
          {props.matchesFound > 0 ? props.matchesFound : "None"}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;

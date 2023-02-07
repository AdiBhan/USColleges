import React, { useEffect } from "react";
const SearchResults = (props) => {
  useEffect(() => {
    // Perform any updates or side effects when the stateFromParent changes
    console.log("SearchResults useEffect: " + props.matchesFound);
  }, [props.matchesFound]);
  return (
    <div className="flex flex-row justify-center p-2 m-4 ">
      <div>
        <h4 className={props.searchTextStyle}>
          You searched for: <div className="underline">{props.search}</div>
        </h4>{" "}
      </div>
      <br></br>
      <div className="pl-10">
        <h4 className={props.searchTextStyle}>
          Matches found:{" "}
          <div className="underline ">
            {props.matchesFound > 0 ? props.matchesFound : "None"}
          </div>
        </h4>{" "}
      </div>
    </div>
  );
};
export default SearchResults;

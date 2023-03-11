import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/Header.scss";
import TableLayout from "../Tables/TableLayout";
import FavoritesButton from "./Buttons/FavoritesButton";
import GraphButton from "./Buttons/GraphButton";
import ResetButton from "./Buttons/ResetButton";
import SearchButton from "./Buttons/SearchButton";
import Dropdown from "./Dropdown";
import Icon from "./Icon";
import SearchIcon from "./SearchIcon";
import SearchResults from "./SearchResults";
const Header = (props) => {
  //---------------------------------------------------------
  // State variables
  const [search, setSearch] = useState("");

  const searchTextStyle = "m-1 text-sm italic text-center bg-white ui header  ";

  const [crData, setCrData] = useState(props.crData);
  const [forbesData, setForbesData] = useState(props.forbesData);

  const [moneyData, setMoneyData] = useState(props.moneyData);

  const [render, setRender] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [isReset, setIsReset] = useState(false);

  const [placeholderValue, setPlaceholderValue] = useState("College");

  const [numOfMatchesFound, setNumOfMatchesFound] = useState(0);

  //---------------------------------------------------------
  // Updating the different datasets when the components mounts
  useEffect(() => {
    setCrData(props.crData);
    setForbesData(props.forbesData);
    setMoneyData(props.moneyData);
  }, [props.crData, props.forbesData, props.moneyData]);

  const logChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      returnResults(e);
    }
  };
  const handlePlaceHolder = (e) => {
    setPlaceholderValue(e);
  };

  //---------------------------------------------------------

  const returnResults = () => {
    setSearch(searchText);
    const line2 = document.getElementsByClassName("purple_line")[0];
    const search_icon = document.getElementsByClassName("search_icon")[0];

    search_icon.style.display = "none";
    line2.style.display = "none";

    const line3 = document.getElementsByClassName("purple_line3")[0];
    line3.style.display = "block";

    // Checks if user accidentally pressed enter without typing anything

    if (searchText !== "") {
      query(crData, setCrData);
      query(forbesData, setForbesData);
      query(moneyData, setMoneyData);
      setRender(true);
    }
  };

  const query = (CollegeList, setCollegeList) => {
    // Deep copy of the CollegeList array, so that the original array is not modified
    let filteredColleges = JSON.parse(JSON.stringify(CollegeList));

    let storeName = "";
    let storeLocation = "";
    let storeRankings = "";
    let countMatches = 0;
    for (let i = 0; i < CollegeList.length; i++) {
      // Looping through the college data to check if the search input matches any of the College names,
      //and if so, it will filter the Colleges array based on the search input

      if (placeholderValue === "College") {
        if (
          searchText.toUpperCase() ===
          CollegeList[i]["Name"].toUpperCase().split(" ")[0]
        ) {
          storeName = CollegeList[i]["Name"];
          storeLocation = CollegeList[i]["Location"];
          storeRankings = CollegeList[i]["Ranking"];
          countMatches++;
        }
        // If the search input does not match any of the College names, it will display an array of empty strings (aka no results)
        filteredColleges[i]["Name"] = "";
        filteredColleges[i]["Location"] = "";
        filteredColleges[i]["Rankings"] = "";
      }

      filteredColleges[0]["Name"] = storeName;
      filteredColleges[0]["Location"] = storeLocation;
      filteredColleges[0]["Ranking"] = storeRankings;
      setCollegeList(filteredColleges);
      setIsReset(true);
    }

    if (placeholderValue === "Location") {
      let counter = 0;
      for (let i = 0; i < CollegeList.length; i++) {
        if (
          searchText.toUpperCase() ===
          CollegeList[i]["Location"].toUpperCase().split(" ")[0]
        ) {
          console.log(CollegeList[i]["Location"].toUpperCase().split(" ")[0]);
          storeName = CollegeList[i]["Name"];
          storeLocation = CollegeList[i]["Location"];
          storeRankings = CollegeList[i]["Ranking"];

          filteredColleges[counter]["Name"] = storeName;
          filteredColleges[counter]["Location"] = storeLocation;
          filteredColleges[counter]["Ranking"] = storeRankings;
          counter++;
          countMatches++;
        }
        // If the search input does not match any of the College names, it will display an array of empty strings (aka no results)

        filteredColleges[i]["Name"] = "";
        filteredColleges[i]["Location"] = "";
        filteredColleges[i]["Rankings"] = "";
      }
      setCollegeList(filteredColleges);
      setIsReset(true);
    }

    setNumOfMatchesFound(countMatches);

    // setTimeout is used to delay the rendering of the CollegeList array, so that the user can see the filtered array
  };

  const resetData = () => {
    const line2 = document.getElementsByClassName("purple_line")[0];

    const search_icon = document.getElementsByClassName("search_icon")[0];

    search_icon.style.display = "block";
    line2.style.display = "block";

    const line3 = document.getElementsByClassName("purple_line3")[0];
    line3.style.display = "none";

    setCrData(props.crData);
    setForbesData(props.forbesData);
    setMoneyData(props.moneyData);
    setRender(false);
    setIsReset(false);
    setSearchText("");
  };

  return (
    <div className="bg-white">
      <div className={`searchBarandProfilePos header_sty`}>
        <span className="purple_line"></span>{" "}
        <SearchIcon returnResults={returnResults} />
        <span className="purple_line2"></span>
        <span className="purple_line3"></span>
        <div className={spacingStyle}>
          <div className="flex grid-cols-1 scale-90 "></div>{" "}
          <div>
            {" "}
            <h8 className="italic ui tiny header"></h8>
          </div>
        </div>{" "}
        <Icon />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Dropdown placeholder={handlePlaceHolder} />
        </div>{" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="flex m-3 row">
            <div className="flex justify-between scale-110">
              {" "}
              <input
                onChange={(e) => logChange(e)}
                className={`searchbar_style`}
                onKeyDown={handleKeyPress}
                value={searchText}
                maxLength="25"
                placeholder={`Find ${placeholderValue} Rankings... `}
              ></input>
            </div>
          </div>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchButton returnResults={returnResults}></SearchButton>{" "}
            <ResetButton isReset={isReset} resetData={resetData}></ResetButton>
            <GraphButton
              isReset={isReset}
              placeholderValue={placeholderValue}
              resetData={resetData}
            ></GraphButton>
          </div>{" "}
          <FavoritesButton />
        </div>
      </div>{" "}
      <div>
        {render ? (
          <SearchResults
            search={search}
            searchTextStyle={searchTextStyle}
            matchesFound={numOfMatchesFound}
          />
        ) : (
          <div></div>
        )}
        <div></div>{" "}
      </div>{" "}
      <TableLayout
        moneyData={moneyData}
        forbesData={forbesData}
        crData={crData}
        isPending={props.isPending}
      />{" "}
    </div>
  );
};

export default Header;

const spacingStyle = "flex justify-end gap-3 ";

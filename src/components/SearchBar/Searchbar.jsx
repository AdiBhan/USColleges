import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import CollegeRankings from "../CollegeRanking/CollegeRankings";
const SearchBar = (props) => {
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
  //---------------------------------------------------------

  const returnResults = () => {
    setSearch(searchText);
    console.log(moneyData);

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
    for (let i = 0; i < CollegeList.length; i++) {
      // Looping through the college data to check if the search input matches any of the College names,
      //and if so, it will filter the Colleges array based on the search input

      if (
        searchText.toUpperCase() === CollegeList[i]["Name"].toUpperCase() ||
        searchText.toUpperCase() === CollegeList[i]["Location"].toUpperCase() ||
        searchText.toUpperCase() ===
          CollegeList[i]["Name"].toUpperCase().split(" ")[0]
      ) {
        storeName = CollegeList[i]["Name"];
        storeLocation = CollegeList[i]["Location"];
        storeRankings = CollegeList[i]["Ranking"];
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

    // setTimeout is used to delay the rendering of the CollegeList array, so that the user can see the filtered array
  };

  const resetData = () => {
    setCrData(props.crData);
    setForbesData(props.forbesData);
    setMoneyData(props.moneyData);
    setRender(false);
    setIsReset(false);
  };

  return (
    <div className="bg-white">
      <div className={searchBarandProfilePos}>
        <div className={spacingStyle}>
          <div className>
            <div className="flex grid-cols-1 scale-90 ">
              <div>
                <img
                  className="w-20 h-20 m-2"
                  src="https://i.gyazo.com/b2f6ce07f740a49075e214f20d235cba.png"
                ></img>
              </div>
              <div>
                <h8 className="italic ui tiny header"></h8>
              </div>
            </div>
          </div>
          <div className="flex m-3 row">
            <div className="flex justify-between scale-110">
              {" "}
              <input
                onChange={(e) => logChange(e)}
                className={searbarStyle}
                onKeyDown={handleKeyPress}
                placeholder="Find College Rankings... "
              ></input>
            </div>
          </div>
          <div className="m-3">
            <button
              onClick={returnResults}
              className={`md:flex ${submitStyle}  `}
            >
              Search
            </button>
            {isReset ? (
              <button className="ui primary button" onClick={resetData}>
                Reset
              </button>
            ) : (
              <h1></h1>
            )}
          </div>
        </div>
      </div>
      <div>
        {render ? (
          <h4 className={searchTextStyle}>
            You searched for: <div className="underline">{search}</div>
          </h4>
        ) : (
          <h1></h1>
        )}
        <div className={props.background}>
          <CollegeRankings
            moneyData={moneyData}
            forbesData={forbesData}
            crData={crData}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
const searbarStyle =
  "ring-1  bg-white ring-inset ring-offset-purple-100/50 border-2 border-black placeholder-black shadow-md s  scale-125  font-bold font-red-500  m-3 md:flex h-10  rounded-full  p-3  scale-105 hover:scale-130 font:mono ";
const searchBarandProfilePos = "bg-white  flex  md:flex  justify-center";
const profileStyle =
  "btn btn-primary border-2 border-yellow-500   position-absolute top-0 end-0 m-3 md:flex h-10 border border-black p-3  hover:scale-105 font:mono placeholder-black shadow-md";
const submitStyle =
  "m-3 border-2 border-black rounded-full hover:scale-90 ui positive button";

const spacingStyle = "flex justify-end gap-3";
//-------------------------------------------------------------------------------------------------

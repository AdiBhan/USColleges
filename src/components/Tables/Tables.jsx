import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/DataStyle.scss";

import { FavoritesContext } from "../Context/FavoritesContext";
const Tables = (props) => {
  const [curDate, setcurDate] = useState(null);

  useEffect(() => {
    const alert = document.getElementsByClassName("alert-style")[0];
    alert.style.display = "none";
    const date = new Date();
    setcurDate(date.toLocaleDateString());
  }, []);

  const { numFavorites, setNumFavorites } = useContext(FavoritesContext);

  const initArray = new Array(props.data.length).fill(false);
  const [isFavorite, setIsFavorite] = useState(initArray);
  const [alertTimeout, setAlertTimeout] = useState(null);

  const activateFavorite = (college, index) => {
    const newIsFavorite = [...isFavorite];
    newIsFavorite[index] = !newIsFavorite[index];

    const alertText = document.getElementsByClassName("alert-text")[0];

    if (alertTimeout !== null) {
      clearInterval(alertTimeout);
    }
    if (newIsFavorite[index]) {
      alertText.innerHTML = college.Name + " added to favorites";
      setNumFavorites(numFavorites + 1);
      console.log(numFavorites);
    } else {
      alertText.innerHTML = college.Name + " removed from favorites";
      setNumFavorites(numFavorites - 1);
      console.log(numFavorites);
    }

    const alertStyle = document.getElementsByClassName("alert-style")[0];
    alertStyle.style.display = "block";

    const timeout = setTimeout(() => {
      alertStyle.style.display = "none";
    }, 3000);

    setAlertTimeout(timeout);

    setIsFavorite(newIsFavorite);
  };

  const table_style = `ui striped ${props.color} table`;
  return (
    <>
      <div
        className=" table-container table_sty h"
        style={{ height: "600px", overflowY: "scroll" }}
      >
        {" "}
        <a className="hover:text-blue-300" href={props.link}>
          <h1 className="mt-3 title_sty">{props.table_name}</h1>{" "}
          <h3 className=" subtitle_sty">Data live as of {curDate}</h3>{" "}
        </a>{" "}
        <table className={`${table_style} `}>
          <thead>
            <tr>
              {" "}
              <th className="header_sty"></th>
              <th className="header_sty">Ranking</th>
              <th className="header_sty"> Name</th>
              <th className="header_sty">Location</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {props.data.map((college, index) => (
              <tr key={index}>
                {" "}
                {isFavorite[index] ? (
                  <td
                    onClick={() => activateFavorite(college, index)}
                    className="clipboard check icon"
                  >
                    {" "}
                    <i class="heart icon"></i>
                  </td>
                ) : (
                  <td onClick={() => activateFavorite(college, index)}>
                    <FontAwesomeIcon icon={faClipboardCheck} />
                  </td>
                )}
                <td className="body_sty">{college.Ranking}</td>{" "}
                <td className="body_sty">{college.Name}</td>
                <td className="body_sty">{college.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </>
  );
};

export default Tables;

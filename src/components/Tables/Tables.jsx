import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const Tables = (props) => {
  const initArray = new Array(props.data.length).fill(false);
  const [isFavorite, setIsFavorite] = useState(initArray);

  const activateFavorite = (index) => {
    const newIsFavorite = [...isFavorite];
    newIsFavorite[index] = !newIsFavorite[index];
    setIsFavorite(newIsFavorite);
  };

  const table_style = `ui striped ${props.color} table`;
  return (
    <div className="border-2 border-black h ">
      <h1 className="m-3 text-center scale-95 ui header">{props.table_name}</h1>
      <div
        className=" table-container"
        style={{ height: "600px", overflowY: "scroll" }}
      >
        <table className={`${table_style} w-full overflow-y-scroll }`}>
          <thead>
            <tr>
              {" "}
              <th></th>
              <th>Ranking</th>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {props.data.map((college, index) => (
              <tr key={index}>
                {" "}
                {isFavorite[index] ? (
                  <td
                    onClick={() => activateFavorite(index)}
                    className="clipboard check icon"
                  >
                    {" "}
                    <i class="heart icon"></i>
                  </td>
                ) : (
                  <td onClick={() => activateFavorite(index)}>
                    <FontAwesomeIcon icon={faClipboardCheck} />
                  </td>
                )}
                <td>{college.Ranking}</td> <td>{college.Name}</td>
                <td>{college.Location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;

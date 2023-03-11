import React from "react";
import "../../../styles/Buttons.scss";
import { FavoritesContext } from "../../Context/FavoritesContext";
function GraphButton(props) {
  const { numFavorites } = React.useContext(FavoritesContext);
  return (
    <div>
      {numFavorites > 0 ? (
        <button className=" favorites_button">
          Favorites [x{numFavorites}]
        </button>
      ) : (
        <button className=" favorites_button">Favorites </button>
      )}
    </div>
  );
}

export default GraphButton;

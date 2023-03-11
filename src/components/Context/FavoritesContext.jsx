import React, { createContext, useState } from "react";

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [numFavorites, setNumFavorites] = useState(0);

  return (
    <FavoritesContext.Provider value={{ numFavorites, setNumFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

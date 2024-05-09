import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TOKEN, URL } from "../utils/env";

const PopularContext = createContext({});

export const usePopularMovies = () => useContext(PopularContext);

export const PopularContextProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  useEffect(() => {
    fetch(`${URL}/3/movie/popular`, options)
      .then((response) => response.json())
      .then((response) => setPopularMovies(response))
      .catch((err) => console.error(err));
  }, []);

  const value = useMemo(() => ({ popularMovies }), [popularMovies]);
  return (
    <PopularContext.Provider value={value}>{children}</PopularContext.Provider>
  );
};

export default PopularContext;

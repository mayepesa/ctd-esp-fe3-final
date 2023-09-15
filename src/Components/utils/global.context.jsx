import { createContext, useEffect, useMemo, useReducer, useState } from "react";

export const initialState = {
  themes: {
    light: {
      font: "black",
      backgroundColor: "#EEF1FF",
      navBackground: "#D2DAFF",
      cardBackground: "#c2d4ff",
    },
    dark: {
      font: "white",
      backgroundColor: "#352F44",
      navBackground: "#5C5470",
      cardBackground: "#5e5a6e",
    },
  },
  data: [],
};

export const ContextGlobal = createContext(initialState);

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      if (action.payload === initialState.themes.dark)
        return initialState.themes.light;
      if (action.payload === initialState.themes.light)
        return initialState.themes.dark;
      break;
    default:
      return state;
  }
};

const favsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAV":
      let currentFavs = state;
      let currentDentist = action.payload;
      let dentistSearch = currentFavs?.filter(
        (item) => item.id === action.payload.id
      );
      if (dentistSearch.length !== 0) {
        let newFavs = currentFavs.filter((fav) => fav.id !== currentDentist.id);
        localStorage.setItem("favs", JSON.stringify(newFavs));
        alert("Este dentista se eliminó de favoritos.");
        return newFavs;
      } else {
        let newFavs = [...currentFavs, currentDentist];
        localStorage.setItem("favs", JSON.stringify(newFavs));
        alert("¡Este dentista se agregó a favoritos!");
        return newFavs;
      }
    case "REMOVE_ALL_FAVS":
      return [];
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const { themes, data } = initialState;
  const [apiData, setApiData] = useState(data);
  const [theme, dispatch] = useReducer(themeReducer, themes.light);
  const [favs, dispatchFavs] = useReducer(
    favsReducer,
    JSON.parse(localStorage.getItem("favs")) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((data) => data.json());
      setApiData(response);
    };
    fetchData();
  }, []);

  const themeProviderValue = useMemo(
    () => ({
      theme,
      handleChangeTheme: (theme) =>
        dispatch({ type: "CHANGE_THEME", payload: theme }),
    }),
    [theme, dispatch]
  );

  const favsProviderValue = useMemo(
    () => ({
      favs,
      handleChangeFavs: (dentist) =>
        dispatchFavs({ type: "TOGGLE_FAV", payload: dentist }),
      handleRemoveFavs: () =>
        dispatchFavs({ type: "REMOVE_ALL_FAVS", payload: [] }),
    }),
    [favs, dispatchFavs]
  );

  return (
    <ContextGlobal.Provider
      value={{ ...themeProviderValue, ...favsProviderValue, apiData }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

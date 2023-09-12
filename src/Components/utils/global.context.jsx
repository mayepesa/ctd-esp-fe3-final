import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const initialState = {
  themes: {
    light: {
      font: "black",
      backgroundColor: "#EEF1FF",
      navBackground: "#D2DAFF",
      cardBackground: "#c2d4ff"
    },
    dark: {
      font: "white",
      backgroundColor: "#352F44",
      navBackground: "#5C5470",
      cardBackground: "#5e5a6e"
    },
  },
  data: [],
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const { themes, data } = initialState;
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(themes.light);
  const [apiData, setApiData] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((data) => data.json());
      setApiData(response);
    };
    fetchData();
  }, []);

  const handleChangeTheme = useCallback(() => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  },[theme, themes.dark, themes.light]);

  const themeProviderValue = useMemo(
    () => ({ theme, handleChangeTheme }),
    [theme, handleChangeTheme]
  );

  return (
    <ContextGlobal.Provider value={{...themeProviderValue, apiData}}>
      {children}
    </ContextGlobal.Provider>
  );
};

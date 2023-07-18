import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Slideshow from "./components/Slideshow";
import CardContainer from "./components/CardContainer";
import ArticleContainer from "./components/ArticleContainer";
import Divider from "./components/Divider";

const getTheme = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light";
  }
};

function App() {
  const [theme, setTheme] = useState(getTheme);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navigation variant={theme} changeTheme={changeTheme} />
      <div className="main">
        <Slideshow />
        <Divider variant={theme} changeTheme={changeTheme} />
        <ArticleContainer variant={theme} changeTheme={changeTheme} />
        <Divider variant={theme} changeTheme={changeTheme} />
        <CardContainer variant={theme} changeTheme={changeTheme} />
      </div>
    </>
  );
}

export default App;

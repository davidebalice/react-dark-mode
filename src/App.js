import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Slideshow from "./components/Slideshow";
import CardContainer from "./components/CardContainer";
import ArticleContainer from "./components/ArticleContainer";

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

  //https://bootstrapmade.com/demo/ZenBlog/

  return (
    <>
      <Navigation variant={theme} changeTheme={changeTheme} />
      <div className="main">
        <Slideshow />
        <ArticleContainer variant={theme} changeTheme={changeTheme} />       
        <CardContainer variant={theme} changeTheme={changeTheme} />       
      </div>
    </>
  );
}

export default App;

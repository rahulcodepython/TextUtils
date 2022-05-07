import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
// import About from "./components/About";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontColor, setFontColor] = useState("black")

  let mode = () => {
    if (theme == "light") {
      document.body.style.backgroundColor = "black"
      setFontColor("white")
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white"
      setFontColor("black")
      setTheme("light");
    }
  };

  return (
    <div className="App">
      <Navbar title="Text-Utils" theme={theme} mode={mode} />
      <Textbox title="Enter your text here" color={fontColor} />
      {/* <About /> */}
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textbox from "./components/Textbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/error";

const App = () => {
    const [theme, setTheme] = useState("light");
    const [fontColor, setFontColor] = useState("black");
    const [alert, setAlert] = useState(null);

    let mode = () => {
        if (theme === "light") {
            document.body.style.backgroundColor = "black";
            setFontColor("white");
            setTheme("dark");
            showAlert("Dark Mode has been enabled.", "success");
        } else {
            document.body.style.backgroundColor = "white";
            setFontColor("black");
            setTheme("light");
            showAlert("Dark Mode has been disabled.", "success");
        }
    };

    let showAlert = (message, alertType) => {
        setAlert({
            msg: message,
            type: alertType,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <Router>
            <div className="App">
                <Navbar title="Text-Utils" theme={theme} mode={mode} />
                <Alert alert={alert} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Textbox
                                title="Enter your text here"
                                color={fontColor}
                                alert={showAlert}
                            />
                        }
                    />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App

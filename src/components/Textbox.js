import React, { useState } from "react";
import Preview from "./Preview";

export default function Textbox(props) {
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.alert("Converted to uppercase.", "success");
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.alert("Converted to lowercase.", "success");
    };

    const handleCaptitalize = () => {
        const firstLetter = text[0].toUpperCase();
        const otherLetters = text.slice(1).toLowerCase();
        const finalLetters = firstLetter.concat(otherLetters);
        setText(finalLetters);
        props.alert("Capitalized the first letter of the given text.", "success");

    };

    const handleRemoveSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.alert("Extra spaces are removed.", "success");
    };

    const handleDelete = () => {
        setText("");
        props.alert("Text box is cleared.", "success");
    };

    function handleCopy() {
        let copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.alert("Copy to clipboard.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <div className="container mb-3 my-4 text-center">
            <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label fs-2"
                style={{ color: props.color }}
            >
                {props.title}
            </label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                value={text}
                onChange={handleOnChange}
                style={{
                    backgroundColor: props.color === "black" ? "white" : "black",
                    color: props.color,
                }}
            ></textarea>
            <div className="action my-2 p-3">
                <button className="btn btn-success my-2" onClick={handleUpperCase}>
                    Uppercase
                </button>
                <button className="btn btn-success mx-2 my-2" onClick={handleLowerCase}>
                    Lowercase
                </button>
                <button className="btn btn-success my-2" onClick={handleCaptitalize}>
                    Captitalize
                </button>
                <button
                    className="btn btn-success my-2 mx-2"
                    onClick={handleRemoveSpaces}
                >
                    Remove Extra Spaces
                </button>
                <button className="btn btn-success my-2" onClick={handleDelete}>
                    Delete
                </button>
                <button className="btn btn-success my-2 mx-2" onClick={handleCopy}>
                    Copy
                </button>
            </div>
            <Preview text={text} color={props.color} />
        </div>
    );
}

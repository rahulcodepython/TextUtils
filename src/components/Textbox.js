import React, { useState } from "react";
import Preview from "./Preview";

export default function Textbox(props) {
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    };

    const handleCaptitalize = () => {
        const firstLetter = text[0].toUpperCase();

        const otherLetters = text.slice(1).toLowerCase();

        const finalLetters = firstLetter.concat(otherLetters);

        setText(finalLetters);
    };

    const handleRemoveSpaces = () => {
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "));
    };

    const handleDelete = () => {
        setText("");
    };

    function handleCopy() {
        let copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <div className="container mb-3 my-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fs-2" style={{"color": props.color}}>
                {props.title}
            </label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                value={text}
                onChange={handleOnChange}
                style={{
                    backgroundColor: props.color==='black'?'white':'black',
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
                <button className="btn btn-success my-2 mx-2" onClick={handleRemoveSpaces}>
                    Remove Extra Spaces
                </button>
                <button className="btn btn-success my-2" onClick={handleDelete}>
                    Delete
                </button>
                <button className="btn btn-success my-2 mx-2" onClick={handleCopy}>
                    Copy
                </button>
            </div>
            <Preview text={text} color={props.color}/>
        </div>
    );
}

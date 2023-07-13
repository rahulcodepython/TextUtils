import React from "react";

export default function Preview(props) {
    let word = 0;
    if (props.text.length !== 0) {
        word = props.text.split(" ").length;
    }
    return (
        <div>
            <div className="container fs-3" style={{"color": props.color}}>
                <span>{word} Word</span> <span>{props.text.length} Letters</span>
            </div>
            <div className="container" style={{"color": props.color}}>
                <h3>Preview</h3>
                <div className="container">{props.text}</div>
            </div>
        </div>
    );
}

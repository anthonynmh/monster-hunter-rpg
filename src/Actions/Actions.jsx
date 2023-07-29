import React from "react";

export default function Actions(props) {
    return (
        <button className="action-buttons" onClick={props.action}>{props.text}</button>
    );
}


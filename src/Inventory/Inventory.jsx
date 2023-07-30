import React from "react";

export default function Inventory(props) {
    return (
        <div className="inventory">
            <span>Currently equipped: <strong>{props.weapon}</strong></span>
            <span className="weapon-buttons">
                <button onClick={props.actionPrev}>Previous weapon</button>
                <button onClick={props.actionNext}>Next weapon</button>
            </span>
        </div>
    );
}

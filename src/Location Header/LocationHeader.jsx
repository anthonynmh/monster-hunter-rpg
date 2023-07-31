import React from "react";

export default function LocationHeader(props) {
    return (
        <div className="location-header">
            <div className="location-text">
                Location = <strong className="location-strong">{props.location}</strong>
            </div>
            <button className="manual" onClick={props.action}>Tips</button>
        </div>
    );
}
import React from "react";

export default function LocationHeader({location}) {
    return (
        <div className="location-header">
            <div className="location-text">
                Location = {location}
            </div>
        </div>
    );
}
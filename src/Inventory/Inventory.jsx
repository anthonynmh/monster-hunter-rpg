import React from "react";

export default function Inventory({weapon}) {
    return (
        <div className="inventory">
            <span>Currently equipped: <strong>{weapon}</strong></span>
            <span className="weapon-buttons">
                <button onClick={prevWeapon}>Previous weapon</button>
                <button onClick={nextWeapon}>Next weapon</button>
            </span>
        </div>
    );
}

function prevWeapon() {
    // alert("clicked prev weapon button!");
}

function nextWeapon() {
    // alert("clicked next weapon button!");
}
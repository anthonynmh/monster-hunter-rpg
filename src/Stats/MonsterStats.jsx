import React from "react";

export default function monsterStats(props) {
    return (
        <ul className="monsterStats">
            <li>HP: <strong>{props.hp}</strong></li>
            <li>Attack Damage: <strong>{props.attackDamage}</strong></li>
        </ul>
    );
}
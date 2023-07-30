import React from "react";

export default function Stats(props) {
    return (
        <ul className="playerStats">
            <li>HP: <strong>{props.hp}</strong></li>
            <li>XP: <strong>{props.xp}</strong></li>
            <li>Level: <strong>{props.level}</strong></li>
            <li>Gold: <strong>{props.gold}</strong></li>
            <li>Attack Damage: <strong>{props.attackDamage}</strong></li>
            <li>Armour Power: <strong>{props.armourPower}</strong></li>
        </ul>
    );
}
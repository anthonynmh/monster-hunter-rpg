import React from "react";

const playerStats = {
    hp: 100,
    xp: 0,
    level: 0,
    gold: 50,
    attackDamage: 5,
    armourPower: 1
};

export default function Stats() {
    return (
        <ul className="stats">
            <li>HP: <strong>{playerStats.hp}</strong></li>
            <li>XP: <strong>{playerStats.xp}</strong></li>
            <li>Level: <strong>{playerStats.level}</strong></li>
            <li>Gold: <strong>{playerStats.gold}</strong></li>
            <li>Attack Damage: <strong>{playerStats.attackDamage}</strong></li>
            <li>Armour Power: <strong>{playerStats.armourPower}</strong></li>
        </ul>
    );
}
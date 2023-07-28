import React from "react";

export default function stats({playerStats}) {
    return (
        <div>
            <ul className="player-stats">
                <li>HP: <strong>{playerStats.hp}</strong></li>
                <li>XP: <strong>{playerStats.xp}</strong></li>
                <li>Level: <strong>{playerStats.level}</strong></li>
                <li>Gold: <strong>{playerStats.gold}</strong></li>
                <li>Attack Damage: <strong>{playerStats.attackDamage}</strong></li>
                <li>Armour Power: <strong>{playerStats.armourPower}</strong></li>
            </ul>
        </div>
    );
}
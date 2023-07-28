import React from "react";

export default function stats({playerStats}) {
    return (
        <div>
            <ul className="player-stats">
                <li>HP: {playerStats.hp}</li>
                <li>XP: {playerStats.xp}</li>
                <li>Level: {playerStats.level}</li>
                <li>Gold: {playerStats.gold}</li>
                <li>Attack Damage: {playerStats.attackDamage}</li>
                <li>Armour Power: {playerStats.armourPower}</li>
            </ul>
        </div>
    );
}
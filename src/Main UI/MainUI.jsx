import React from "react";

import Stats from './Stats';
import Context from './Context';

const playerStats = {
    hp: 100,
    xp: 0,
    level: 0,
    gold: 50,
    attackDamage: 5,
    armourPower: 1
};

export default function MainUI() {
    return (
        <div className="main-ui">
            <Stats playerStats = {playerStats} />
            <Context text = "Story context input here." />
        </div>
    );
}
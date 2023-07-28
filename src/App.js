import React from "react";

import MainUI from './Main UI/MainUI';
import Inventory from './Inventory/Inventory';
import LocationHeader from './Location Header/LocationHeader';

const locations = [
    {
        name: "Intersection",
        "button text": ["Go to Town Square", "Go to Monster Mines", "Go to Dragon's Den", "Go to Pier"],
        // "button functions": [goToTownSquare, goToMonsterMines, goToDragonDen, goToPier],
        text: "Which road will you take at this intersection?"
    },
    {
        name: "Town Square",
        "button text": ["Go to Weapon Store", "Go to Armour Store", "Go to Infirmary", "Exit Town Square"],
        // "button functions": [goToWeaponStore, goToArmourStore, goToInfirmary, goToIntersection],
        text: "You are in the town square. Are you in need of weapons, armour, or healthcare?"
    },
    {
        name: "Weapon Store",
        "button text": ["Buy weapon (30 gold)", "Sell weapon", "Exit store", " "],
        // "button functions": [buyWeapon, sellWeapon, goToTownSquare, null],
        text: "You entered the weapon store."
    },
    {
        name: "Armour Store",
        "button text": ["Buy armour (25 gold)", "Sell armour", "Exit store", " "],
        // "button functions": [buyArmour, sellArmour, goToTownSquare, null],
        text: "You entered the armour store. [This area is still in development]."
    },
    {
        name: "Infirmary",
        "button text": ["Buy HP (20 gold)", "Exit store", " ", " "],
        // "button functions": [buyHp, goToTownSquare, null, null],
        text: "You entered the Infirmary. [This area is still in development]."
    },
    {
        name: "Monster Mines",
        "button text": ["Fight monsters", "Turn around", " ", " "],
        // "button functions": [fightMonsters, goToIntersection, null, null],
        text: "You stand in front of Monster Mines. Monsters begin to swarm you. [This area is still in development]."
    },
    {
        name: "Dragon's Den",
        "button text": ["Fight Dragon", "Turn around", " ", " "],
        // "button functions": [fightDragon, goToIntersection, null, null],
        text: "You stand in front of the Dragon's Den. You feel bad aura from the inside. [This area is still in development]."
    },
    {
        name: "Pier",
        "button text": ["Return to Intersection", " ", " ", " "],
        // "button functions": [goToIntersection, null, null, null],
        text: "You are at the nicest pier you have ever seen. [This area is still in development]."
    }
];

const inventory = ["Fists"];

export default function App() {
    return (
        <div className="app">
            <LocationHeader location = {locations[0].name} />
            <MainUI />
            <Inventory weapon = {inventory[0]} />
        </div>
    );
}
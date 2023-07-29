import React from "react";
import { useState } from "react";

import LocationHeader from './Location Header/LocationHeader';
import Stats from './Stats/Stats';
import Context from './Context/Context';
import Inventory from './Inventory/Inventory';
import Actions from './Actions/Actions';

const inventory = ["Fists"];

// action functions
function buyWeapon() {

}

function sellWeapon() {

}

function buyArmour() {

}

function sellArmour() {

}

function buyHp() {

}

// combat functions
function fightMonsters() {

}

function fightDragon() {
    
}

// App function
export default function App() {
    const [currLocation, setCurrLocation] = useState(0);

    const locations = [
        {
            name: "Intersection",
            "button infos": [
                {
                    text: "Go to Town Square",
                    action: goToTownSquare
                },
                {
                    text: "Go to Monster Mines",
                    action: goToMonsterMines
                },
                {
                    text: "Go to Dragon's Den",
                    action: goToDragonDen
                },
                {
                    text: "Go to Pier",
                    action: goToPier
                }
            ],
            text: "Which road will you take at this intersection?"
        },
        {
            name: "Town Square",
            "button infos": [
                {
                    text: "Go to Weapon Store",
                    action: goToWeaponStore
                },
                {
                    text: "Go to Armour Store",
                    action: goToArmourStore
                },
                {
                    text: "Go to Infirmary",
                    action: goToInfirmary
                },
                {
                    text: "Exit Town Square",
                    action: goToIntersection
                }
            ],
            text: "You are in the town square. Are you in need of weapons, armour, or healthcare?"
        },
        {
            name: "Weapon Store",
            "button infos": [
                {
                    text: "Buy weapon (30 gold)",
                    action: buyWeapon
                },
                {
                    text: "Sell weapon",
                    action: sellWeapon
                },
                {
                    text: "Exit store",
                    action: goToTownSquare
                }
            ],
            text: "You entered the weapon store."
        },
        {
            name: "Armour Store",
            "button infos": [
                {
                    text: "Buy armour (25 gold)",
                    action: buyArmour
                },
                {
                    text: "Sell armour",
                    action: sellArmour
                },
                {
                    text: "Exit store",
                    action: goToTownSquare
                }
            ],
            text: "You entered the armour store. [This area is still in development]."
        },
        {
            name: "Infirmary",
            "button infos": [
                {
                    text: "Buy HP (20 gold)",
                    action: buyHp
                },
                {
                    text: "Exit store",
                    action: goToTownSquare
                }
            ],
            text: "You entered the Infirmary. [This area is still in development]."
        },
        {
            name: "Monster Mines",
            "button infos": [
                {
                    text: "Fight monsters",
                    action: fightMonsters
                },
                {
                    text: "Turn around",
                    action: goToIntersection
                }
            ],
            text: "You stand in front of Monster Mines. Monsters begin to swarm you. [This area is still in development]."
        },
        {
            name: "Dragon's Den",
            "button infos": [
                {
                    text: "Fight dragon",
                    action: fightDragon
                },
                {
                    text: "Turn around",
                    action: goToIntersection
                }
            ],
            text: "You stand in front of the Dragon's Den. You feel bad aura from the inside. [This area is still in development]."
        },
        {
            name: "Pier",
            "button infos": [
                {
                    text: "Return to Intersection",
                    action: goToIntersection
                }
            ],
            text: "You are at the nicest pier you have ever seen. [This area is still in development]."
        }
    ];

    // goto functions
    function goToIntersection() {
        setCurrLocation(0);
    }

    function goToTownSquare() {
        setCurrLocation(1);
    }

    function goToWeaponStore() {
        setCurrLocation(2);
    }

    function goToArmourStore() {
        setCurrLocation(3);
    }

    function goToInfirmary() {
        setCurrLocation(4);
    }

    function goToMonsterMines() {
        setCurrLocation(5);
    }

    function goToDragonDen() {
        setCurrLocation(6);
    }

    function goToPier() {
        setCurrLocation(7);
    }

    return (
        <div className="app">
            <div className="non-action-container">
                <LocationHeader location = {locations[currLocation].name} />
                <Stats />
                <Context text={locations[currLocation].text} />
                <Inventory weapon = {inventory[currLocation]} />
            </div>
            <div className="action-container">
                {
                    locations[currLocation]["button infos"].map((infoPair) => (
                        <Actions action={infoPair.action} text={infoPair.text} />
                    ))
                }
            </div>            
        </div>
    );
}
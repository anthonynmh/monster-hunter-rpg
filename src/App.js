import React from "react";
import { useState } from "react";

import LocationHeader from './Location Header/LocationHeader';
import Stats from './Stats/Stats';
import Context from './Context/Context';
import Inventory from './Inventory/Inventory';
import Actions from './Actions/Actions';

const playerStats = {
    hp: 100,
    xp: 0,
    level: 0,
    gold: 10,
    attackDamage: 5,
    armourPower: 1
};

const weapons = [
    {
        name: "Fists",
        power: 5,
        text: "Equipped your 'ol Fists."
    },
    {
        name: "Stick",
        power: 10,
        text: "Equipped a trusty Stick."
    },
    {
        name: "Dagger",
        power: 30,
        text: "Equipped a lil cute Dagger."
    },
    {
        name: "Rusty Sword",
        power: 50,
        text: "Equipped Rusty Sword. Hope it doesn't break ;)"
    },
    {
        name: "Hunter's Sword",
        power: 100,
        text: "Equipped the Hunter's Sword. Perfect for a Dragon Slayer like yourself."
    }
];

const inventory = ["Fists"];
let weaponToBuy = 1;

// App function
export default function App() {
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
                    text: "Sell last bought weapon",
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
        setCurrText(locations[0].text);
    }

    function goToTownSquare() {
        setCurrLocation(1);
        setCurrText(locations[1].text);
    }

    function goToWeaponStore() {
        setCurrLocation(2);
        setCurrText(locations[2].text);
    }

    function goToArmourStore() {
        setCurrLocation(3);
        setCurrText(locations[3].text);
    }

    function goToInfirmary() {
        setCurrLocation(4);
        setCurrText(locations[4].text);
    }

    function goToMonsterMines() {
        setCurrLocation(5);
        setCurrText(locations[5].text);
    }

    function goToDragonDen() {
        setCurrLocation(6);
        setCurrText(locations[6].text);
    }

    function goToPier() {
        setCurrLocation(7);
        setCurrText(locations[7].text);
    }

    // inventory functions
    function nextWeapon() {
        if (currWeapon === inventory.length - 1) {
            setCurrWeapon(0);
        } else {
            setCurrWeapon(currWeapon + 1);
        }
    }

    function prevWeapon() {
        if (currWeapon === 0) {
            setCurrWeapon(inventory.length - 1);
        } else {
            setCurrWeapon(currWeapon - 1);
        }
    }

    // transaction functions
    function buyWeapon() {
        if (playerStats.gold > 30 && weaponToBuy < weapons.length) {
            playerStats.gold -= 30;
            inventory.push(weapons[weaponToBuy].name);
            setCurrText("You now own: " + weapons[weaponToBuy].name + ". ");
            weaponToBuy++;
        } else {
            if (weaponToBuy === weapons.length) {
                setCurrText("You have already purchased the best weapon. We have no more weapons at the store.");
            } else {
                setCurrText("You are broke. Please leave the store.");
            }
        }
    }

    function sellWeapon() {
        if (weaponToBuy > 1) {
            let popped = inventory.pop();
            playerStats.gold += 30;
            setCurrText("You sold: " + popped + ". ")
            weaponToBuy--;
        } else {
            setCurrText("You have nothing to sell.");
        }
    }
    
    function buyArmour() {
        setCurrText("Still in development.");
    }
    
    function sellArmour() {
        setCurrText("Still in development.");
    }
    
    function buyHp() {
        if (playerStats.gold > 20) {
            playerStats.hp += 50;
            playerStats.gold -= 20;
            setCurrText("You spent 20 Gold. You feel rejuvenated.");
        } else {
            setCurrText("You are too broke for healthcare.");
        }
    }

    // combat functions
    function fightMonsters() {

    }

    function fightDragon() {
        
    }


    const [currLocation, setCurrLocation] = useState(0);
    const [currWeapon, setCurrWeapon] = useState(0);
    const [currText, setCurrText] = useState(locations[0].text);

    return (
        <div className="app">
            <div className="non-action-container">
                <LocationHeader 
                    location = {locations[currLocation].name} 
                />
                <Stats 
                    hp={playerStats.hp}
                    xp={playerStats.xp}
                    level={playerStats.level}
                    gold={playerStats.gold}
                    attackDamage={playerStats.armourPower}
                    armourPower={playerStats.armourPower}
                />
                <Context 
                    text={currText} 
                />
                <Inventory 
                    weapon={inventory[currWeapon]} 
                    actionNext={nextWeapon}
                    actionPrev={prevWeapon}
                />
            </div>
            <div className="action-container">
                {
                    locations[currLocation]["button infos"].map((infoPair) => (
                        <Actions 
                            action={infoPair.action} 
                            text={infoPair.text} 
                        />
                    ))
                }
            </div>            
        </div>
    );
}
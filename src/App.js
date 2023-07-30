import React from "react";
import { useState } from "react";

import LocationHeader from './Location Header/LocationHeader';
import Stats from './Stats/Stats';
import MonsterStats from './Stats/MonsterStats';
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

const monsters = [
    {
        name: "Slimey",
        hp: 20,
        attackDamage: 5
    },
    {
        name: "Hairy Beast",
        hp: 50,
        attackDamage: 10
    }
];

let inventory = ["Fists"];
let weaponToBuy = 1;
let chosenMonster = monsters[Math.round(Math.random())];
// let playerHp = playerStats.hp;
let playerDamage = playerStats.attackDamage;
let monsterHp;
let monsterDamage;
let isFighting = false;

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
        },
        {
            name: "Slimey",
            "button infos": [
                {
                    text: "Attack",
                    action: attack
                },
                {
                    text: "Return to entrance",
                    action: goToMonsterMines
                }
            ],
            text: "Fighting: Slimey"
        },
        {
            name: "Hairy Beast",
            "button infos": [
                {
                    text: "Attack",
                    action: attack
                },{
                    text: "Return to entrance",
                    action: goToMonsterMines
                }
            ],
            text: "Fighting: Hairy Beast"
        },
        {
            name: "Dragon",
            "button infos": [
                {
                    text: "Attack",
                    action: attack
                },{
                    text: "Return to entrance",
                    action: goToDragonDen
                }
            ],
            text: "Fighting: Dragon"
        },
        {
            name: "fainted",
            "button infos": [
                {
                    text: "Continue your journey (5 gold)",
                    action: goToInfirmary
                },
                {
                    text: "Restart",
                    action: restart
                }
            ]
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
        isFighting = false;
    }

    function goToDragonDen() {
        setCurrLocation(6);
        setCurrText(locations[6].text);
        isFighting = false;
    }

    function goToPier() {
        setCurrLocation(7);
        setCurrText(locations[7].text);
    }

    function goToCombat(monsterName) {
        if (monsterName === "Slimey") {
            setCurrLocation(8);
            setCurrText(locations[8].text);
        } else if (monsterName === "Hairy Beast") {
            setCurrLocation(9);
            setCurrText(locations[9].text);
        } else {
            setCurrLocation(10);
            setCurrText(locations[10].text);
        }
        setCurrText("Fighting: " + monsterName);
        isFighting = true;
    }

    // inventory functions
    function nextWeapon() {
        if (currWeapon === inventory.length - 1) {
            playerDamage = weapons[0].power;
            setCurrWeapon(0);
        } else {
            playerDamage = weapons[currWeapon + 1].power;
            setCurrWeapon(currWeapon + 1);
        }
    }

    function prevWeapon() {
        if (currWeapon === 0) {
            playerDamage = weapons[inventory.length - 1].power;
            setCurrWeapon(inventory.length - 1);
        } else {
            playerDamage = weapons[currWeapon - 1].power;
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
        if (playerStats.gold >= 20) {
            setCurrHp(currHp + 50);
            playerStats.gold -= 20;
            setCurrText("You spent 20 Gold. You feel rejuvenated.");
        } else {
            setCurrText("You are too broke for healthcare.");
        }
    }

    // combat functions
    function fightMonsters() {
        chosenMonster = monsters[Math.round(Math.random())];
        monsterHp = chosenMonster.hp;
        monsterDamage = chosenMonster.attackDamage;
        goToCombat(chosenMonster.name);
    }

    function fightDragon() {
        monsterHp = 500;
        monsterDamage = 150;
        goToCombat("Dragon", 100);
    }

    function attack() {
        if (currHp > 0 && monsterHp > 0) {
            // player's turn
            monsterHp -= playerDamage;
            if (monsterHp <= 0) {
                playerStats.gold += 40;
                setCurrText("You win. You collected 40 Gold. Please exit to entrance.");
            }

            setCurrHp(currHp - monsterDamage);
            if (currHp <= 0) {
                setCurrText("You fainted.");
                setCurrLocation(11);
            }
        }
    }

    function restart() {
        setCurrHp(playerStats.hp);
        playerStats.gold = 50;
        inventory = ["Fists"];
        goToIntersection();
    }

    const [currHp, setCurrHp] = useState(playerStats.hp);
    const [currLocation, setCurrLocation] = useState(0);
    const [currWeapon, setCurrWeapon] = useState(0);
    const [currText, setCurrText] = useState(locations[0].text);

    return (
        <div className="app">
            <div className="non-action-container">
                <LocationHeader 
                    location = {locations[currLocation].name} 
                />

                <div className="stats">
                    <Stats 
                        hp={currHp}
                        xp={playerStats.xp}
                        level={playerStats.level}
                        gold={playerStats.gold}
                        attackDamage={playerStats.armourPower}
                        armourPower={playerStats.armourPower}
                    />

                    {isFighting ? (
                        <MonsterStats
                            hp={monsterHp}
                            attackDamage={monsterDamage}
                        />
                    ) : (
                        <div></div>
                    )}
                    
                </div>
                
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

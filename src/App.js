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
    },
    {
        name: "Dragon",
        hp: 50,
        attackDamage: 50
    }
];

let inventory = ["Fists"];
let weaponToBuy = 1;
let chosenMonster = monsters[Math.round(Math.random())];
let playerHp = 100;
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
            text: "You entered the Infirmary."
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
            text: "You stand in front of Monster Mines. Monsters begin to swarm you."
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
            text: "You stand in front of the Dragon's Den. You feel bad aura from the inside."
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
            name: "Fighting Slimey",
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
            name: "Fighting Hairy Beast",
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
            name: "Fighting Dragon",
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
            name: "Defeated monster",
            "button infos": [
                {
                    text: "Return to entrance",
                    action: goToMonsterMines
                }
            ],
            text: "You defeated the monster! You collected 40 Gold."
        },
        {
            name: "fainted",
            "button infos": [
                {
                    text: "Go to Infirmary (20 gold)",
                    action: goToInfirmary
                },
                {
                    text: "Restart",
                    action: restart
                }
            ],
            text: "You fainted during the fight."
        }, 
        {
            name: "winning page",
            "button infos": [
                {
                    text: "Restart",
                    action: restart
                }
            ],
            text: "Congratulations! You have slayed the Dragon."
        },
        {
            name: "Introduction",
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
            text: "Welcome to RhyneSvill. " +
                    "You must defeat the dragon that is preventing people from leaving the town. " +
                    "You are in the town's intersection. " +
                    "Where do you want to go? " +
                    "Use the buttons below."
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

    function goToMonsterWin() {
        setCurrLocation(11);
        setCurrText(locations[11].text);
    }

    function goToFaint() {
        setCurrLocation(12);
        setCurrText(locations[12].text);
    }

    function goToDragonWin() {
        setCurrLocation(13);
        setCurrText(locations[13].text);
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
        chosenMonster = monsters[2];
        monsterHp = chosenMonster.hp;
        monsterDamage = chosenMonster.attackDamage;
        goToCombat(chosenMonster.name);
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function attack() {
        if (currHp > 0 && monsterHp > 0) {
            // player's turn
            let playerDamageAmount = randomIntFromInterval(1, playerDamage);
            monsterHp -= playerDamageAmount;
            
            if (monsterHp <= 0) {
                if (currLocation === 10) {
                    goToDragonWin();
                } else {
                    playerStats.gold += 40;
                    goToMonsterWin();
                }
            } else {

                let monsterDamageAmount = randomIntFromInterval(1, monsterDamage);
                playerHp -= monsterDamageAmount;
                setCurrHp(playerHp);
                if (playerHp <= 0) {
                    goToFaint();
                }

                setCurrText("You dealt " + playerDamageAmount + " damage. " + 
                        "Enemy dealt " + monsterDamageAmount + " damage to you.");
            }
        }
    }

    function restart() {
        isFighting = false;
        setCurrHp(playerStats.hp);
        playerStats.gold = 50;
        inventory = ["Fists"];
        goToIntersection();
    }

    const [currHp, setCurrHp] = useState(playerStats.hp);
    const [currLocation, setCurrLocation] = useState(14);
    const [currWeapon, setCurrWeapon] = useState(0);
    const [currText, setCurrText] = useState(locations[14].text);

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
                        attackDamage={playerDamage}
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

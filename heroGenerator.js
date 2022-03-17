
/* I want a function that prints a static block of text in the format "you are a ___ ___. You look like ___. etc."
Every blank will call a random item from one of many different lists of appropriate words or phrases.

Better to do this by calling a pre-determined function that gets a random item, or just referring to the array and picking randomly in-line?

*/


// This is the series of arrays, in order, which will be called to populate the blank spaces in the hero generator text block, at random.

// You are a...

// [elf subraces]
function elf() {
    const elfRace = ['wood elf', 'high elf', 'drow'];
    return elfRace[Math.floor(Math.random() * elfRace.length)]
};

const textA = ['elemental', 'human', elf(), 'orc', 'dwarf', 'lizardman', 'alien', 'goblin', 'gnome', 'treant', 'halfling', 'tiefling', 'minotaur', 'birdperson', 'troll', 'dragonborn', 'fey'];

// Extra description to be inserted IF 'elemental' is one of the options selected.
function textElemental() {
    const plane = ['Fire', 'Water', 'Earth', 'Wind', 'Thunder and Lightning', 'Darkness', 'Light'];
    return ` of the Elemental Plane of ${plane[Math.floor(Math.random() * plane.length)]}`
};

// [optional extra archetype]
const textB = ['werewolf', 'vampire', 'zombie', 'cyborg', 'ghost', 'demon', 'pirate'];

const textC = ['warrior', 'fighter', 'ranger', 'wizard', 'sorceror', 'rogue', 'paladin', 'knight', 'crusader', 'bard', 'druid', 'monk', 'barbarian', 'warlock', 'cleric', 'priest', 'shaman', 'samurai', 'ninja', 'necromancer', 'thief', 'serial killer', 'bounty hunter', 'hunter', 'assassin', 'secret agent', 'pacifist', 'pit fighter', 'slavedriver', 'sniper', 'con artist', 'illusionist', 'farmer', 'peasant', 'soldier', 'warlord', 'spellsword', 'artificer', 'engineer', 'scientist', 'gunslinger', 'loremaster', 'scout', 'warmage', 'summoner', 'swashbuckler', 'gladiator', 'death knight', 'pyromaniac', 'doctor'];

console.log(textElemental());



// Main. Generator code is located here.

function generate() {
    let randA = () => {
        // 33.3% chance of a random dual-race 
        if (Math.random() <= (1/3)) {
             let firstA = textA[Math.floor(Math.random() * textA.length)];
             let secondA = textA[Math.floor(Math.random() * textA.length)];
             
             while (secondA === firstA) {
                 secondA = textA[Math.floor(Math.random() * textA.length)]
                };
            
             return `${firstA}-${secondA}`;
            } else {
                return textA[Math.floor(Math.random() * textA.length)];
            }
    };

    const randB = () => {
        return textB[Math.floor(Math.random() * textB.length)]
    };

    const randC = () => {
        return textC[Math.floor(Math.random() * textC.length)]
    };



    console.log(randA());
    console.log(randB());
    console.log(randC());
}

generate();




const button = () => {
    console.log(generate());
}
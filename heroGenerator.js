//// Welcome to the Hero Generator! Results may vary. Hero Generator cannot guarantee the generation of an actual hero.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is the series of arrays which will be called from to randomly populate the blank spaces in the hero generator text block.

// Elf subraces
function elf() {
    const elfRace = ['wood elf', 'high elf', 'drow'];
    return elfRace[Math.floor(Math.random() * elfRace.length)]
};

//// MAIN - races
const textRace = [/*'alien', 'birdperson', 'dragonborn', */'dwarf', 'elemental']//, elf(), 'fey', 'gnome', 'goblin', 'halfling', 'human', 'lizardman', 'minotaur', 'orc', 'tiefling', 'treant', 'troll'];

//  25% chance of having an additional archetype
function archetype() {
    const arch = [' cyborg', ' ghost', ' vampire', ' werewolf', ' zombie'];
    if (Math.random() <= 0.25) {
        return arch[Math.floor(Math.random() * arch.length)]
    } else {
        return ''
    }
};

//// MAIN - classes
const textNormalClass = ['artificer', 'barbarian', 'bard', 'cleric', 'crusader', 'druid', 'fighter', 'gladiator', 'gunslinger', 'hunter', 'illusionist', 'knight', 'loremaster', 'monk', 'ninja', 'paladin', 'pirate', 'pit fighter', 'priest', 'ranger', 'rogue', 'samurai', 'scout', 'secret agent', 'shaman', 'sniper', 'soldier', 'sorceror', 'spellsword', 'summoner', 'swashbuckler', 'thief', 'warlock', 'warmage', 'warrior', 'wizard'];

const textDarkClass = ['arsonist', 'assassin', 'axe murderer', 'bounty hunter', 'cultist', 'death knight', 'executioner', 'gang enforcer', 'hangman', 'human trafficker', 'necromancer', 'serial killer', 'slavedriver', 'torturer', 'warlord'];

const textMehClass = ['accountant', 'beggar', 'farm hand', 'generally disappointing failure', 'hermit', 'pacifist', 'peasant', 'unsuccessful shopkeeper', 'social media influencer', 'inept town guard'];


//// MAIN - generator

function generate() {    
    // Switch turns on and activates the insertion of a randomised element type, if one of the races is elemental
    let elementalSwitch = false;
    
    const randRace = () => {
        let firstRace = textRace[Math.floor(Math.random() * textRace.length)];
        let secondRace = textRace[Math.floor(Math.random() * textRace.length)];
        if (firstRace === 'elemental' || secondRace === 'elemental') {
            elementalSwitch = true
        };

        // 33.3% chance that the race is a random dual-race 
        if (Math.random() <= (1 / 3)) {
            // Ensures a dual-race isn't the same race duplicated
            while (secondRace === firstRace) {
                secondRace = textRace[Math.floor(Math.random() * textRace.length)];
            };
            return `${firstRace}-${secondRace}`;
        } else {
            return firstRace;
        }
    };

    // Extra, randomised description to be inserted IF 'elemental' is one of the options selected.
    function textElemental() {
        
        const plane = ['Fire', 'Water', 'Earth', 'Wind', 'Thunder and Lightning', 'Darkness', 'Light'];
        if (elementalSwitch === true) {
            return ` of the Elemental Plane of ${plane[Math.floor(Math.random() * plane.length)]}`
        } else {
            return '';
        };
    }

    const randClass = () => {
        let score = Math.random();
        // 7% chance of non-heroic, "meh" class
        if (score <= 0.07) {
            return `You have led a life of astounding mediocrity. As those around you strove towards one of myriad heroic occupations, you, who were supposed to be destined for adventure, fame and glory, just as they were, instead stumbled down the path of the ${textMehClass[Math.floor(Math.random() * textMehClass.length)]}. You're welcome to reroll, you know...`
        // 26% chance of dark, evil class
        } else if (score <= 0.33) {
            return `You spit on the title of "hero", for you have something truly dark at your core. Did the past murder of your best friend or lover embitter you against all the world? Was your village razed to the ground by raiders, leaving all you held dear in smouldering ruin? Or perhaps your parents just didn't hug you enough. Whatever the cause, you're now the baddest of bad eggs, the most rotten of rotten apples, and the blackest of black sheep. Your title, fearfully whispered in your wake, is...  ${textDarkClass[Math.floor(Math.random() * textDarkClass.length)]}.`    
        // 67% chance of heroic, "normal" class
        } else {
            return `You are a true hero. Wherever loot lies unlooted, dragons sleep unslain, or damsels remain very much still in distress, you'll be there. With burning ambition, indomitable courage, and steel-edged determination, you follow the path... of the ${textNormalClass[Math.floor(Math.random() * textNormalClass.length)]}.`
        }
    };

    // Output... with a 1% chance of apotheosis
    if (Math.random <= 0.01) {
        console.log('You are literally God (or one of them, perhaps). You win. Congratulations.')
    } else {
        console.log(`You are a proud ${randRace() + archetype() + textElemental()}.`);
        console.log(randClass());
    };
};

// Push the button...
generate();
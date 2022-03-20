//// Welcome to the Hero Generator! Results may vary. Hero Generator cannot guarantee the generation of an actual hero.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is the series of arrays which will be called from to randomly populate the blank spaces in the hero generator text block.

// Random number generator in the range of ('num' - 1). Useful for matching the 0-indexed length of arrays.
function rng(num) {
    return Math.floor(Math.random() * num)
};

// Elf subraces
function elf() {
    const elfRace = ['wood elf', 'high elf', 'drow'];
    return elfRace[rng(elfRace.length)]
};

//// MAIN - races
const textRace = ['alien', 'birdperson', 'dragonborn', 'dwarf', 'elemental', elf(), 'fey', 'gnome', 'goblin', 'halfling', 'human', 'lizardman', 'minotaur', 'orc', 'tiefling', 'treant', 'troll'];

//  25% chance of having an additional archetype
function archetype() {
    const arch = [' cyborg', ' ghost', ' vampire', ' werewolf', ' zombie'];
    if (Math.random() <= 0.25) {
        return arch[rng(arch.length)]
    } else {
        return ''
    }
};

//// MAIN - classes
const textNormalClass = ['artificer', 'barbarian', 'bard', 'cleric', 'crusader', 'druid', 'fighter', 'gladiator', 'gunslinger', 'hunter', 'illusionist', 'knight', 'loremaster', 'monk', 'ninja', 'paladin', 'pirate', 'pit fighter', 'priest', 'ranger', 'rogue', 'samurai', 'scout', 'secret agent', 'shaman', 'sniper', 'soldier', 'sorceror', 'spellsword', 'summoner', 'swashbuckler', 'thief', 'warlock', 'warmage', 'warrior', 'wizard'];

const textDarkClass = ['arsonist', 'assassin', 'axe murderer', 'bounty hunter', 'cultist', 'death knight', 'executioner', 'gang enforcer', 'hangman', 'human trafficker', 'necromancer', 'serial killer', 'slavedriver', 'torturer', 'warlord'];

const textMehClass = ['accountant', 'beggar', 'farm hand', 'generally disappointing failure', 'hermit', 'pacifist', 'peasant', 'unsuccessful shopkeeper', 'social media influencer', 'inept town guard'];

//// MAIN - description
const weight = ['morbidly obese', 'a little overweight', 'about average weight', 'a little thin', 'utterly emaciated'];

const height = ['freakishly, gigantically tall', 'pretty tall', 'about average height', 'pretty short', 'freakishly, ludicrously short'];

const feature = ['comically oversized greataxe', 'comically oversized greatsword', 'comically oversized warhammer', 'comically tiny "greataxe"', 'comically tiny "greatsword"', 'comically tiny "warhammer"', 'complete lack of any distinctive features whatsoever', 'glass eye', 'hook in place of a hand', 'insuppressible love for croquet', 'insuppressible love for seal-clubbing', 'insuppressible love of petty vandalism', 'penchant for macaroons', 'scar that runs all the way along the left side of your face', 'terrible fear of clowns', 'terrible fear of heights', 'terrible fear of social interaction', 'two missing fingers on your left hand'];


//// MAIN - generator

function generate() {    
    // Defining these variables within the scope of the generate() function so that they are easily callable by the elemental switch (defined below)
    let firstRace;
    let secondRace;

    const randRace = () => {
        firstRace = textRace[rng(textRace.length)];
        secondRace = textRace[rng(textRace.length)];
        // 33.3% chance that the race is a random dual-race 
        if (Math.random() <= (1 / 3)) {
            // Ensures a dual-race isn't the same race duplicated
            while (secondRace === firstRace) {
                secondRace = textRace[rng(textRace.length)];
            };
            return `${firstRace}-${secondRace}`;
        } else {
            return firstRace;
        }
    };

    // Checks if 'elemental' is the/one of the races seleceted, and if so, instructs the below function to insert description of the element type
    function elementalSwitch() {
        if (firstRace === 'elemental' || secondRace === 'elemental') {
            return true;
        } else {
            return false;
        }
    };

    // Extra, randomised description to be inserted IF 'elemental' is one of the options selected.
    function textElemental() {
        const plane = ['Fire', 'Water', 'Earth', 'Wind', 'Thunder and Lightning', 'Darkness', 'Light'];
        if (elementalSwitch() === true) {
            return ` of the Elemental Plane of ${plane[rng(plane.length)]}`
        } else {
            return '';
        };
    }

    const randClass = () => {
        let score = Math.random();
        // 7% chance of non-heroic, "meh" class
        if (score <= 0.07) {
            return `You have led a life of astounding mediocrity. As those around you strove towards one of myriad heroic occupations, you, who were supposed to be destined for adventure, fame and glory, just as they were, instead stumbled down the path of the ${textMehClass[rng(textMehClass.length)]}. You're welcome to reroll, you know...`
        // 26% chance of dark, evil class
        } else if (score <= 0.33) {
            return `You spit on the title of "hero", for you have something truly dark at your core. Did the past murder of your best friend or lover embitter you against all the world? Was your village razed to the ground by raiders, leaving all you held dear in smouldering ruin? Or perhaps your parents just didn't hug you enough. Whatever the cause, you're now the baddest of bad eggs, the most rotten of rotten apples, and the blackest of black sheep. Your title, fearfully whispered in your wake, is...  ${textDarkClass[rng(textDarkClass.length)]}.`    
        // 67% chance of heroic, "normal" class
        } else {
            return `You are a true hero. Wherever loot lies unlooted, dragons sleep unslain, or damsels remain very much still in distress, you'll be there. With burning ambition, indomitable courage, and steel-edged determination, you follow the path... of the ${textNormalClass[rng(textNormalClass.length)]}.`
        }
    };

    // Output... with a 1% chance of apotheosis
    if (Math.random <= 0.01) {
        console.log('You are literally God (or one of them, perhaps). You win. Congratulations.')
    } else {
        console.log(`You are a proud ${randRace() + archetype() + textElemental()}.\n\n${randClass()}\n\nYou are ${weight[rng(weight.length)]} and ${height[rng(height.length)]} for your race. The thing that really makes you stand out is your ${feature[rng(feature.length)]}.`)
    };
};

// Push the button...
generate();
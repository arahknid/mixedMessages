//// Welcome to the Hero Generator! Results may vary. Hero Generator cannot guarantee the generation of an actual hero.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is the series of arrays which will be called from to randomly populate the blank spaces in the hero generator text block.

// Elf subraces
function elf() {
    const elfRace = ['wood elf', 'high elf', 'drow'];
    return elfRace[Math.floor(Math.random() * elfRace.length)]
};

//// MAIN - races
const textRace = ['elemental', 'human', elf(), 'orc', 'dwarf', 'lizardman', 'alien', 'goblin', 'gnome', 'treant', 'halfling', 'tiefling', 'minotaur', 'birdperson', 'troll', 'dragonborn', 'fey'];

//  25% chance of having an additional archetype
function archetype() {
    const arch = [' werewolf', ' vampire', ' zombie', ' cyborg', ' ghost'];
    if (Math.random() <= 0.25) {
        return arch[Math.floor(Math.random() * arch.length)]
    } else {
        return ''
    }
};

//// MAIN - classes
const textNormalClass = ['warrior', 'fighter', 'ranger', 'wizard', 'sorceror', 'rogue', 'paladin', 'knight', 'crusader', 'bard', 'druid', 'monk', 'barbarian', 'warlock', 'cleric', 'priest', 'shaman', 'samurai', 'ninja', 'thief', 'hunter', 'secret agent', 'pit fighter', 'sniper', 'illusionist', 'soldier', 'spellsword', 'artificer', 'scientist', 'gunslinger', 'loremaster', 'scout', 'warmage', 'summoner', 'swashbuckler', 'gladiator', 'pirate'];

const textDarkClass = ['necromancer', 'serial killer', 'bounty hunter', 'gang enforcer', 'slavedriver', 'assassin', 'human trafficker', 'torturer', 'hangman', 'executioner', 'death knight', 'pyromaniac', 'warlord', 'cultist'];

const textMehClass = ['pacifist', 'farmer', 'peasant', 'beggar', 'town guard', 'accountant', 'social media influencer', 'generally disappointing failure', 'business-person', 'hermit'];


//// MAIN - generator

function generate() {    
    const randRace = () => {
        // 33.3% chance that the race is a random dual-race 
        if (Math.random() <= (1 / 3)) {
            let firstRace = textRace[Math.floor(Math.random() * textRace.length)];
            let secondRace = textRace[Math.floor(Math.random() * textRace.length)];
            // Ensures a dual-race isn't the same race duplicated
            while (secondRace === firstRace) {
                secondRace = textRace[Math.floor(Math.random() * textRace.length)];
            };
            return `${firstRace}-${secondRace}`;
        } else {
            return textRace[Math.floor(Math.random() * textRace.length)];
        }
    };

    // Extra, randomised description to be inserted IF 'elemental' is one of the options selected.
    function textElemental() {
        const plane = ['Fire', 'Water', 'Earth', 'Wind', 'Thunder and Lightning', 'Darkness', 'Light'];
        if (randRace().includes('elemental')) {
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
            return `You are a true hero. Wherever loot lies unlooted, dragons sleep unslain, or damsels remain very much still in distress, you'll be there. You follow the path of the ${textNormalClass[Math.floor(Math.random() * textNormalClass.length)]}.`
        }
    };

    // Output
   console.log(`You are a proud ${randRace() + archetype() + textElemental()}.`);
   console.log(randClass());
};

// Push the button...
generate();
const PLAYER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
let hasBonusLife = true;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';


let battleLog = [];

function getMaxLifeValue() {
    const enteredValue = +prompt("Enter the maximum life for you and the monster", '100')
    if (isNaN(enteredValue) || enteredValue <= 0) {
        throw {message: 'Invalid user input, not a number'}
    }
    return enteredValue;
}

let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValue();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function writeToLog(e, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: e,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };

    switch (e) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
    }

    /* -- Replaced with the Switch
    if (e === LOG_EVENT_PLAYER_ATTACK || e === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (e === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target = 'PLAYER';
    } else if (e === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER';
    }
    */

    battleLog.push(logEntry);

}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    let event = LOG_EVENT_MONSTER_ATTACK;
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        removeBonusLife();
        hasBonusLife = false;
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("You would be dead but the bonus life saved you!");
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won 🔥');
        event += 'GAME_OVER';
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost 💔');
        event += 'GAME_OVER';
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw');
        event += 'GAME_OVER';
        reset();
    }

    writeToLog(
        event,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

}

function attackMonster(mode) {
    const damage = mode === MODE_ATTACK ? PLAYER_ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    /* if (mode === MODE_ATTACK) {
        damage = PLAYER_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        damage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    } */
    const monsterDamage = dealMonsterDamage(damage)
    currentMonsterHealth -= monsterDamage;

    writeToLog(
        logEvent,
        monsterDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();
}

function attack() {
    attackMonster(MODE_ATTACK)
}

function strongAttack() {
    attackMonster(MODE_STRONG_ATTACK)
}

function heal() {
    let healValue;

    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal yourself more than the initial health!");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

let i = 0;

function printLog() {
    for (const element of battleLog) {
        console.log(`#${i}`);
        for (const key in element) {
            console.log(`${key} => ${element[key]}`);
        }
        i++;
    }
}

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', printLog);

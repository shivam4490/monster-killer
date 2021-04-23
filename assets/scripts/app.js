const attackValue = 10;
const strongAttackValue = 18;
const monsterAttackValue = 15;
const healPlayerValue = 10;
let chosenMaxLife = 100;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
   const playerDamage = dealPlayerDamage(monsterAttackValue);
   currentPlayerHealth -= playerDamage;

   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert('You won!');
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert('You Lost!');
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
      alert('Draw!');
   }
}

function attackMonster(attackmode) {
   let maxDamage;
   if (attackmode === 'ATTACK') {
      maxDamage = attackValue;
   } else if (attackmode === 'STRONG_ATTACK') {
      maxDamage = strongAttackValue;
   }
   const damage = dealMonsterDamage(maxDamage);
   currentMonsterHealth -= damage;
   endRound();
}

function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
   let healValue;
   if (currentPlayerHealth >= chosenMaxLife - healPlayerValue) {
      alert("you can't heal more than your max intial value");
      healValue = chosenMaxLife - currentPlayerHealth;
   } else {
      healValue = healPlayerValue;
   }
   increasePlayerHealth(healValue);
   currentPlayerHealth = healValue;
   endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

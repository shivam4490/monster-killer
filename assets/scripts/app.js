const attackValue = 10;
const strongAttackValue = 18;
const monsterAttackValue = 15;
let chosenMaxLife = 100;

const currentMonsterHealth = chosenMaxLife;
const currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackmode) {
   let maxDamage;
   if (attackmode === 'ATTACK') {
      maxDamage = attackValue;
   } else if (attackmode === 'STRONG_ATTACK') {
      maxDamage = strongAttackValue;
   }
   const damage = dealMonsterDamage(maxDamage);
   currentMonsterHealth -= damage;

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

function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

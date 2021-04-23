const attackValue = 10;
const monsterAttackValue = 15;
let chosenMaxLife = 100;

const currentMonsterHealth = chosenMaxLife;
const currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
   const damage = dealMonsterDamage(attackValue);
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
attackBtn.addEventListener('click', attackHandler);

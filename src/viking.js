// Soldier

class Soldier {
  constructor(healthParam, strengthParam) {
    this.health = healthParam;
    this.strength = strengthParam;
  }

  attack = () => {
    return this.strength;
  }

  receiveDamage = (damageParameter) => {
    this.health = this.health - damageParameter;
  }

}

// Viking

class Viking extends Soldier {
  constructor(nameParam, healthParam, strengthParam) {
    super(healthParam, strengthParam);
    this.name = nameParam;
  }
  

  receiveDamage = (damageParameter) => {
    this.health = this.health - damageParameter;
    if (this.health > 0) {
      return `${this.name} has received ${damageParameter} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry = () => {
    return "Odin Owns You All!";
  }

}

// Saxon

class Saxon extends Soldier {

  receiveDamage = (damageParameter) => {
    this.health = this.health - damageParameter;
    if (this.health > 0) {
      return `A Saxon has received ${damageParameter} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War

class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking = (Viking) => {
    this.vikingArmy.push(Viking);
  }

  addSaxon = (Saxon) => {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack = () => {
    this.randomSaxon = Math.random() * this.saxonArmy.length;
    this.roundedSaxon = Math.floor(this.randomSaxon);
    this.randomViking = Math.random() * this.vikingArmy.length;
    this.roundedViking = Math.floor(this.randomViking);

  saxonAttack = () => {
    
  }

  showStatus = () => {
    
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

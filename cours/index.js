const obj = {
  nom: "Tramontane",
  pseudo: "Tramontane",
  age: 35,
  ville: "Saint Nazaire",
  admin: true,

  direB() {
    alert("dire bonjour " + obj.nom);
  },
};

const objII = {
  taille: "1.75m",
  yeux: "bleu",
  cheveux: "chatain",
};

const newObject = Object.assign({}, obj, objII);

// obj.connexion();

// for (const key in obj) {
//   console.log(obj[key]);
// // }

// const keys = Object.values(obj);
// console.log(keys);

/***** Constructor *****/

class Constructeur {
  constructor(paramétre1, paramétre2) {
    this.paramétre1 = paramétre1;
    this.paramétre2 = paramétre2;
  }
}

const object = new Constructeur("paramétre1", "paramétre2");

/***** L'héritage *****/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saySomething(text) {
    console.log(this.name + " dit: " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le Chien court !");
  }
}

const rit = new Dog("ritin", 9);
console.log(rit);

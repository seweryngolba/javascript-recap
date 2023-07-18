// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
//   brake: function () {
//     console.log("You use brakes");
//   },
// };

// const car2 = {
//   model: "Stinger",
//   color: "grey",
//   year: 2022,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
//   brake: function () {
//     console.log("You use brakes");
//   },
// };

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car1.drive();
// car2.drive();

// class Player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }
//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();

// player1.score += 1;
// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student1 = new Student("Mark", 21, 3.4);
// const student2 = new Student("Pedro", 23, 4.4);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);

// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);

// student2.study();

// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }

//   static startRace() {
//     console.log("3,2,1,GO!");
//   }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Stinger");
// const car3 = new Car("BMW");
// const car4 = new Car("Bugatti");

// console.log(Car.numberOfCars);

// Car.startRace();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 3, 60);
// const hawk = new Hawk("hawk", 5, 120);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flySpeed);

class Car {
  constructor(power) {
    this._gas = 44;
    this._power = power;
  }
  get power() {
    return `${this._power}HP`;
  }
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100}%)`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);
let car2 = new Car(320);

car.gas = -20;

console.log(car.power);
console.log(car.gas);
console.log(car2.power);

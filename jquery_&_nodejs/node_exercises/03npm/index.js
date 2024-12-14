import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

const superheroName = randomSuperhero();
console.log(`...and I am ${superheroName}!`)
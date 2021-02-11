// Define base class Animal 
class Animal{
    constructor(name){
        this.name = name ;
    }

}

// Dog subclass from Animal
class Dog extends Animal{
    constructor(name){
        super(name);
        this.cute = true;
    }

}

// Husky subclass from Dog
class Husky extends Dog{
    constructor(name){
        super(name)
        this.annoying = true
    }
}

husky = new Husky('K') // initialize husky object 
let huskyProto = Object.getPrototypeOf(husky) // pass in husky object

console.log(Animal.prototype.constructor === Object.getPrototypeOf(Dog)) // true
console.log(Dog.prototype.constructor === Object.getPrototypeOf(Husky)) // true 

console.log(Husky.prototype.constructor === Object.getPrototypeOf(husky)) // false
console.log(Husky.prototype === Object.getPrototypeOf(husky)) // true, both equal to 'Dog {}' 


// reference:https://stackoverflow.com/questions/38740610/object-getprototypeof-vs-prototype
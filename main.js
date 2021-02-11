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

husky = new Husky('K')
let huskyProto = Object.getPrototypeOf(husky) // pass in husky object
console.log(huskyProto) // print out 'Dog {}' in the console
//
console.log('-------------------')
// 
let HuskyProto = Object.getPrototypeOf(Husky) // pass in Husky Class
console.log(HuskyProto) // print out '[class Dog extends Animal]' in the console 
console.log(Husky.prototype) // print out 'Dog {}' in the console
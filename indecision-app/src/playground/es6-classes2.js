class Person {
    constructor(name = 'annoymous', age = 0) { 
        this.name = name;
        this.age = age;
    }
    explaining() { 
        return `Hellow my name is ${this.name} and age is ${this.age}`
    }
    getDescription() {
        return `Hellow my name is ${this.name} and age is ${this.age}`
    }
}

class Traveler extends Person {
    constructor(name, age, loc){
        super(name, age);
        this.name= name;
        this.age = age;
        this.loc = loc
    }
    homeLocation() {
        let greeting = super.getDescription() + ` I lived In ${this.loc}`;
        return greeting;
    }
}

const me = new Traveler('sean', 31, 'Republic of Koera');
console.log(me)
console.log(me.homeLocation());
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app')) 

class OldSyntax {
    constructor() {
        this.name = "Seankim";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi my name is ${this.name}`
    };
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());

// -------------------------------

class NewSyntax { //constructor 사용x 
    name = "sean"
    //new class property
    getGreeting = () => {
        return `Hello my name is ${this.name}`
    }
}

const newSyntax =  new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting());
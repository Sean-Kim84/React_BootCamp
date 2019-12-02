import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   )
// }


// ReactDOM.render(<Layout>
//     <div>
//       <h1>Page Title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>, document.getElementById('app')) 




/* babel-plugin-class-transform-properties */
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
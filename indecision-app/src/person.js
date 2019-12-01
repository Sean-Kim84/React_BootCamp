const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const substract = (a, b) => a - b;

const devided = (a,b)  =>  a / b;

export {
    isAdult,
    canDrink,
    substract as default
};

export default devided;

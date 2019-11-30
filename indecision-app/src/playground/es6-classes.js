// Setup constructor to take name and age (default =0)

class Me {
    constructor(name='annoymous', age=0){ // 생성자(class로 부터 객체를 생성할 때 사용(객체의 초기화담당))
       this.name = name;
       this.age = age;
    }
    explaining() { // 같은 객체 클래스에 있으니까 constructor객체에 있는 args를 this 로 접근 가능하게 해주려면 
       // this.name = name
       // this.age = age
       // 를 선언해주어야한다(constructor안에서)
       // return `Hellow my name is ${this.name} and age is ${this.age}`
       return `Hellow my name is ${this.name} and age is ${this.age}`
    }
    getDescription() {
        return `Hellow my name is ${this.name} and age is ${this.age}`
    }
}

const personOne = new Me('Sean', 25)// 생성자에 의해 생성된 인스턴스;
console.log(personOne.explaining());

const personTwo = new Me();
console.log(personTwo.explaining())



// class Person {
//     constructor(name = 'annoymous') {
//         this.name = name; // this를 선언해서 instance에서 name을 가져올 수 있도록한다
//     }
//     getGreeting() {
//         //return 'Hi I am ' + this.name + "!";
//         return `Hi I am ${this.name}`
//     }
// }

// const me = new Person('Sean');
// console.log(me);

// const other = new Person();
// console.log(other.getGreeting()); 

class Student extends Me{
    constructor(name, age, major){
        super(name, age, major); // 부모 객체의 함수를 호출하는 데 사용 
        // super는 특히 부모 객체를 확장할 사용한다
        this.name = name;
        this.age = age;
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        // const description 은 안되
        let description = super.getDescription(); // 부모 클래스 함수도 가져올수 있다(super를 통해)
        if(this.hasMajor()){
            description +=` Their major is followed ${this.major}`        
        }
        return description
    }
}

const student = new Student('Rebekah', '10', 'computer science');
console.log(student);
console.log(student.hasMajor());
console.log(student.getDescription());
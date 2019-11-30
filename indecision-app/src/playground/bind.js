const obj = {
    name: "seankim",
    age: 19,
    getName() {
        return this.name
    }
};

const naming = obj.getName; // 이상태면 obj 의 {} 부분만 참조한다
const naming2 = obj.getName.bind(obj) // bind 를 사용해 obj라는변수 자체를 가르킨다
const naming3 = obj.getName.bind({
    name: 'Andrew'
}) // 이렇게 객체의 property에 직접접근도 가능하다

// console.log(naming()); //getName이라는 function 을 변수에 담았을때는 실행이안된다
console.log(naming2());
console.log(obj.getName())
console.log(naming3());

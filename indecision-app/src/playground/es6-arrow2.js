// const add = function(a,b){
//     console.log(arguments);
//     return a+b;
// };
// 
// console.log(add(5,1));

// function 안에 또 다른 function을 넣으면 name에 접근할 수 없다
// 그래서 this를 따로 선언해서 bind해주어야한다 
// 하지만 arrow function 에서는 가능하다 
const user = {
  name: 'Sean',
  cities: ['New york', 'Korea', 'North Korea'],
  printPlacesLived(){ 
    //const that = this;
    // this.cities.forEach(function(city){
    //   console.log(that.name + ' has lived in ' + city);
    // })

      return this.cities.map(city => {
        return this.name + ' has lived in ' + city;
    });

  }
};

const multi = {
  numbers : [10,20,3],
  mulifunc() {
    return this.numbers.map(a => a*a);
  }
}

console.log(user.printPlacesLived());
console.log(multi.mulifunc());
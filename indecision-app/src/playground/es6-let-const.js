var nameVar = 'Seankim';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "Julie"; // let nameLet 으로 let에 똑같은 변수를 두번 넣을 수 없다;
console.log('nameLet', nameLet);

const nameConst = "Frank"; // const에 다시 담을 수 없고 value도 다시 선언할 수 없다
console.log('nameConst', nameConst);

function getPetname() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetname();
console.log(petName);

// Block scoping 

const fullName = "Sean Kim";
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);
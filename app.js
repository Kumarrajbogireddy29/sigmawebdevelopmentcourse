//template string (`) back tick operator +
// it introduced to replce the string concatenation operator (+)
/*
let mobile = {
    brand : 'Apple',
    model : 'iPhone 14 Pro Max',
    price : 90000,
    color : 'Silver'
};

let msg = "BRAND : " + mobile.brand + "COLOUR:" + mobile.color + "PRICE:" + mobile.price;
console.log(msg); // old way of concatenation


let message = `BRAND : ${mobile.brand} color : ${mobile.color} price :${mobile.price}`;
console.log(message); // new way of concatenation using template string 

let template = "<ul>" +
"<li>"  + mobile.brand + "</li>" +
"<li>" + mobile.model + "</li>" +
"<li>"  + mobile.price + "</li>" +
"<li> COLOR : " + mobile.color + "</li>" +
"</ul>";
document.body.innerHTML = template; // old way of concatenation 



let template2 =`<ul>
  <li>${mobile.brand}</li>
  <li>${mobile.color}</li>
  <li>${mobile.price}</li>
  </ul>`;



// optional parameters
let greet =  function(name,age=35) // age is optional parameter with default value 35
    {
        let msg =`Hello ${name} you are ${age} old`;
        console.log(msg);
    };
greet('kumar',age=25); // passing both parameters



let printNumbmers = function(start , end) {
    let result = '' ;
    for(let i = start; i<=end; i++) {
        result += `${i} `;
    }   
    console.log(result);
};
printNumbmers(1,10); // passing both parameters



//Arrow functions
//  function declaring ways ---> normal function, 
// function expression, 
// arrow functionl


let result =  '';
function printNumbmers(){
    let msg = '' ;
    for(let i =1; i<=10; i++){
        msg += `${i} `;
    }       
     return msg;
}
result = printNumbmers();
console.log(result); // normal function 



// function expression
let printNumbersFE= function(){
    let msg = '' ;
    for(let i =1; i<=10; i++){
        msg += `${i} `;
    }       
    return msg;
};

result = printNumbersFE();
console.log(result); // function expression 



// arrow function
let printNumbersAF =() => {
    let msg = '' ;
    for(let i =1; i<=10; i++){
        msg += `${i} `;
    }   
    return msg;
};
result = printNumbersAF();
console.log(result); // arrow function

// limitations of arrow function 

let student = {
    firstName :'kumar',
    lastName :'Raj',
    fullName :() => {
        return `${student.firstName} ${student.lastName}`; // this keyword refers to current object
    }
};
console.log(student.fullName()); // kumar Raj
*/



// desructuring of array and object

let student ={
    name: 'kumar',
    age : 35,
    course : 'Engineering',
    dept : 'Software',
    address :{
        street : 'MG Road',
        city : 'Bangalore',
        state : 'Karnataka',
        pincode : 560001
    },
    hobbies :{
        regular : {
        id :1 ,
        reghobbies :['Cricket','Football','Badminton']
    },
    occasional : {
        id :1,
        occasionalhobbies : ['Travelling','Photography']
    } 
}

};

// by using dde\structuring we can extract the values from object
let {street, city, state} = student. address;
console.log(`STREET :${street}
    CITY : ${city}
    STATE : ${state}`);

 // regular hobbies 

 let {reghobbies} = student.hobbies.regular;
 console.log(reghobbies); // ['Cricket','Football','Badminton']

 // occasional hobbies
 let {occasionalhobbies} = student.hobbies.occasional;
 console.log(occasionalhobbies); // ['Travelling','Photography']


 // spread operator 

 let numbers = [10,20,30,40,50];
 let max = Math.max(...numbers); // spread operator ...
 console.log(max); // 50


  let num = [10,20,30,40,50];
 let min= Math.min(...numbers); // spread operator ...
 console.log(min); // 10


let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [];
for( let i of arr1){
    arr3.push(i);
}
for( let i of arr2){
    arr3.push(i);
}
console.log(arr3); // [1,2,3,4,5,6] old way of merging two arrays


let arr4=['white','black'];
let arr5 = ['red','green'];
let colors = [...arr4,...arr5];
console.log(colors); // [Array(2), Array(2)] old way of merging two arrays


const bike = ["ktm", "Bajaj", "BMW","Kawasaki"];

//Concat()
const bike1 = ["ktm", "Bajaj", "BMW","Kawasaki"];
const cars = ["Saab", "Volvo", "BMW"];
const vechile =bike1.concat(cars,bike);
console.log(vechile);

//constructor
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
console.log(text);

//filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);

//forEach
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.forEach(hi);

function hi(i){
    console.log(i);
}

//unshift()
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("kiwi");
console.log(fruits3);
fruits3.shift();
console.log(fruits3);


//sort
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.sort();
console.log(fruits3);

//sorting numbers
var num =[21 ,4,1,99,3,0,4,5,1,9];
//acending order sorting
num.sort(function(a,b){
    return a-b;
});
console.log(num);
//descending order sorting
num.sort(function(a,b){
    return b-a;
});
console.log(num);

//splice(target,remove,add)
const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
fruitsSplice.splice(2,1,"grapes", "Orange", "Apple");
console.log(fruitsSplice);

//map

const mapEg =[10,20,30,40,50];
const mapEg1=mapEg.map(i);

function i(num){
    return num *5;
}
console.log(mapEg1);


//every
const num1 = [2,30,40,50,90];
const out = num1.every(checkNum);

function checkNum(i){
    return i>10;

}
console.log(out);


//some
const num2 = [2,30,40,50,90];
const out1 = num1.some(checkNum);

function checkNum(i){
    return i>10;

}
console.log(out1);

//isArray()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let result1 = Array.isArray(fruits);
console.log(result1);

//fill
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.fill("Kiwi", 2, 4);
console.log(fruits5);

//findIndex()
const ages1 = [3, 10, 18, 20];

ages1.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log(ages1);
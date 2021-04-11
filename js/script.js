// function greeting(){
//     let age = prompt('how old are you?');
//     let result = ` Hello you are still young if you are still ${age}years old`
//     document.querySelector('#form').innerHTML = result;
// }
// greeting();

// let age = prompt('how old are you?');
// document.querySelector('#form').innerHTML = age;

// age variable is same as the answer of the prompt
// and text of form ?age


// function sayhi (){
//     let name = prompt('What is your name');
//     let result = `Hello .what's up ${name}?`
//     console.log(result);
// }
// sayhi();

// function sumNumbers(a ,b, c){
//     let result = a + b + c;
//     console.log(result);
// }
// sumNumbers(20, 10, 40);

// function sayhi(yourName){
//    let result = `Hellow how's it going ${yourName}`;
//    console.log(result);
// }

// let name = prompt('What is your name?');
// sayhi(name);

// multiple functions
// let number = 0;

// while(number < 100){
//     number++;
//     console.log(number)
// }

// for (let num = 0; num <= 100; num++){
//     console.log(num);
// }

// let fruit = 'banana';

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(''); //split by a comma
// console.log(fruit.split(',')) // by comma


let fruits = ['banana', 'apple', 'orange', 'pineapples'];
// fruits = new Array ('banana', 'apple', 'orange', 'pineapples');

// console.log(fruits[2]);

// fruits[0] = 'pear';
// console.log(fruits);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//array common methods
console.log('to string' , fruits.toString());//multiple arguments , you can see 2 print statements in one box.
console.log(fruits.join(' * '));//add something to each array.
console.log(fruits.pop(), fruits);// remove last item . pop off pinapple and return to you.
console.log(fruits.push('blackberries'), fruits);// push it and return adding blackberries appends.
console.log(fruits[4]);
fruits[4] = 'new fruit';//better way.
console.log(fruits);
fruits.shift();// remove first
console.log(fruits);//just add fruit item. simple. same thing as push.
fruits.unshift('kiwi');// ad fist.shift is that removes fist elemnet from a list.unshift add first element to an array.
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);//combine with that fruits array.  you can see all in one
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));//
console.log(allGroceries.reverse());//order has been fliped
console.log(allGroceries.sort());//alphabetically sorted/

let num = [5, 10 ,2 ,33, 22, 1, 43 ,1123, 342, 1231];
console.log(num.sort(function(a, b){//pass it in function
    return a - b;//sorted in ascending order
    return b - a; //sorted in descending order.
}))

let empryArray = new Array()
for (let num = 0; num < 10; num++){
     empryArray.push(num);
}
console.log(empryArray);//empty array .loop it through keep appending number


//objects in javascript

let student = {
    first :'rafeh',
    last: 'yoon',
    age:25,
    height:170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
    };
console.log(student.last);
console.log(student.first);
student.first = 'notrafeh';// change value how change.
student.age++;
console.log(student.age);// you can increment things like that.
//how you do oriented programming in javascript
console.log(student.studentInfo());

const age = prompt('how old are you');

if ((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}
// Switch statements
//if every day was a weekday
//differentiate between weekday vs weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday
// day 3 --> Wednesday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekend
// day 6 --> Saturday --> weekend

switch (3){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text)
// a lot simpler than if statements

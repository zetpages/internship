// // problem01
// class Student {
//     constructor(fullName) {
//         this.fullName = fullName;
//     }
// }

// const students = [
//     new Student('John Doe'),
//     new Student('Loris Brown'),
//     new Student('Jack Elf')
// ];

// students.forEach(element => {
//     let name = element.fullName.split(' ')[0];
//     Object.assign(element, {name});
// });

// console.log(students);
// console.log("-----");

// // problem02
// class Employee {
//     constructor(fullName, salary) {
//         this.fullName = fullName;
//         this.salary = salary;
//     }
// }

// const employees = [
//     new Employee('Isabella Smith', 5000),
//     new Employee('Ava Williams', 4200),
//     new Employee('Emily Taylor', 8150)
// ];

// let initValue = 0;

// let total = employees.reduce(function(sum, curr) {
//     return sum + curr.salary;
// },initValue);

// console.log(total);
// console.log("-----");

// // using forEach
// let sum = 0;

// employees.forEach(element => {
//     sum += element.salary;
// });

// console.log(sum)
// console.log("-----");

// // problem03

// class Employee {
//     constructor(fullName, city) {
//         this.fullName = fullName;
//         this.city = city;
//     }
// }

// const employees = [
//     new Employee('Olivia Smith', 'Los Angeles'),
//     new Employee('Isla Williams', 'California'),
//     new Employee('Amelia Taylor', 'Boston'),
//     new Employee('Jessica Gagnon', 'Berlin'),
//     new Employee('Lily Lam', 'New-York'),
//     new Employee('Sophie Roy', 'California'),
//     new Employee('Harry Tremblay', 'California'),
//     new Employee('Jack Taylor', 'Moscow'),
//     new Employee('Jacob Smith', 'California'),
//     new Employee('James Wilson', 'Saint-Petersburg')
// ];

// let total = employees.reduce(function(acc, employee) {
//     let n = 0;
//     if (employee.city === 'California') {
//         n++;
//     }
//     return acc + n;
// },0)
// console.log(total)
// console.log("-----");

// // problem04

// const sandwiches = [
//     'tuna',
//     'ham',
//     'turkey',
//     'pb&j'
// ];

// let turkey = "turkey";
// let excludeTurkey = sandwiches.filter(function (el) {
//     return el !== turkey;
// });

// console.log(excludeTurkey);
// console.log("-----");

// // problem05

// const greeting = () => { 
//     const time = new Date().getHours();
//     console.log('Good '+ (time<12 ? 'Morning' : time<18 ? 'Afternoon' : 'Evening'));
// };
// greeting();


// // problem07
// let a = 1, b = 2;

// let t = a;
// a = b;
// b = t;

// console.log("a = " + a);
// console.log("b = " + b);
// console.log("-----");

// // problem10

// let value = (null && undefined) ?? "new value";
// console.log(value);
// console.log("-----");

// //problem11

// const variable = 2;

// let isEven = ((variable % 2 == 0) ? "yes" : "no");
// console.log(isEven);
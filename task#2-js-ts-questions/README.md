### ES6
1. Let's imagine you have students list:
```
class Student {
  constructor(fullName) {
    this.fullName = fullName;
  }
}

const students = [
    new Student('John Doe'),
    new Student('Lorris Brown'),
    new Student('Jack Elf')
];
```
Write a script (use `map` or `forEach` method) that modifies every student's data that will add `name` property extracted from property `fullName`.

2. Write a script (use `reduce` method) that sums up the salaries of all employees from:
```
class Employee {
  constructor(fullName, salary) {
    this.fullName = fullName;
    this.salary = salary;
  }
}

const employees = [
    new Employee('Isabella Smith', 5000),
    new Employee('Ava Williams', 4200),
    new Employee('Emily Taylor', 8150)
];
```

3. Write a script that counts number of employees from `California`:
```
class Employee {
  constructor(fullName, city) {
    this.fullName = fullName;
    this.city = city;
  }
}

const employees = [
    new Employee('Olivia Smith', 'Los Angeles'),
    new Employee('Isla Williams', 'California'),
    new Employee('Amelia Taylor', 'Boston'),
    new Employee('Jessica Gagnon', 'Berlin'),
    new Employee('Lily Lam', 'New-York'),
    new Employee('Sophie Roy', 'California'),
    new Employee('Harry Tremblay', 'California'),
    new Employee('Jack Taylor', 'Moscow'),
    new Employee('Jacob Smith', 'California'),
    new Employee('James Wilson', 'Saint-Petersburg')
];
```

4. Help to the customer to choose a sandwich except `turkey` sandwiches, because he doesn't like it.

   Just log it to the console.
```
const sandwiches = [
    'tuna',
    'ham',
    'turkey',
    'pb&j'
];
```

5. Write an **arrow function** that returns **greeting message** depending on current `date time`.
   
    Eg.: Good Morning, Good Afternoon, Good Evening.

6. Write a `Section` class with **section name** that inherits `ClassRoom`:
```
class Classroom {
    constructor(students) {
        this.students = students;
    }
    room() {
        console.log('This class has  ' + this.students + ' students');
    }
}

// Write your section class there ...

const secA = new SectionA(40);

secA.room();
secA.sectionName();
```

7. Write a script that swaps two shown variables:
```
let a = 1, b = 2;

// Write your code there ...

console.log(a); // Should log '2' 
console.log(b); // Should log '1' 
```

8. Make the script shown below promise based:
```
const login = (email, password, callBack) => {
    setTimeout(() => {
        callBack({ userToken: 'randomId' });
    }, 2000);
}

// Login
login('john.doe@example.com', 'someSecretPassword123', (loginResponseFromCallback) => {
   console.log('User logged in successfully', loginResponseFromCallback.userToken);
});
```


9. Write a script that awaits all Promises from the array and logs the results:
```
// Method that generates random number between specified range
const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const promiseJob = () => {
    return new Promise((resolve, reject) => {
        const randomInt = randomIntFromInterval(100, 2000);
        
        setTimeout(() => resolve(randomInt), randomInt);
    });
}

// Wait for all promise jobs and log them ...
```

10. Write it into one line using coalesce operator:
```
let value;
if (variable === undefined && variable === null) {
   value = 'new value';
} else {
   value = variable;
}
```

11. Write it into one line using ternary operator:
```
let isEven = ""
if (variable % 2 == 0) {
  isEven = "yes"
} else {
  isEven = "no"
}
```

12. Write it into one line:
```
const name = myObj.name;
const age = myObj.age;
const country = myObj.country;
```

13. OOP interfaces and classes. Write classes and interfaces and call them into function following the order of events (as many as possible)<br>
```
There are 3 students and 2 pupils. Their names are Samat, Beknur, Alina, Adilet, Malika.
Samat is taller than Adilet, while Alina and Beknur have the same height and the same age. 
Malika is 5cm taller than Alina and shorter than Adilet for 6 cm. 
It was 21-st December 2021 and it was Samat's birthday, so he turned to 22 years.
After university Samat and his friends Adilet and Malika went home to celebrate. 
They cooked 7 cakes, 5 salad. 
Samat is Alina's elder brother and he has a car, so he needed to pick up his sister from school but he couldn't because he was drunk.
So he asked Adilet to pick up Alina from school. Beknur is Alina's best friend and he has a bicycle.
So he suggested to take her home. But she didn't want. And after some time Adilet came there and take Alina.
Beknur went with them by bycicle. Then they were talking to each other, laughing and eating.
Everyone said toast to Samat and wished all the best to him. After celebrating they went their home to sleep.
```

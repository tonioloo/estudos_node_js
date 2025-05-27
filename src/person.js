class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayMyName() {
        console.log(`Hello, my name is ${this.name}!`);
    }

    sayMyAge() {
        console.log(`I have ${this.age} years old.`);
    }
}

module.exports = { Person };
# Problem Statement
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
## Object Literals

```c
const obj={
    name:"zohaib",
    age: 25,
    greet: function(name) {
        return `Hello, ${name}!`;
    }
}

console.log(obj);
console.log(obj.greet('Zohaib')); 
```

## Objects within functions

```c
function f() {
    const obj = {
        name: "Hello World",
        age: 25,
        greet: function(n) {
            return `Hello, ${n}!`;
        }
    };
    return obj;
}   

console.log(f().greet("Zohaib"));
```
## Functions in Function

```c
function f(){
    function add(a,b){
        return a + b;
    }
    function subtract(a,b){
        return a - b;
    }
    return {
         add,
         subtract
    }
}

console.log(f().add(5,3)); // 8
console.log(f().subtract(5,3)); // 2
```

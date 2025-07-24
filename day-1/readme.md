# Problem Statement
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

# Useful Concepts
----------------------------------------------------------------------
## Normal Function
A traditional named function that can be reused and called later.

```c
function f(name){
    return `Hi, ${name}!`;
}

console.log(f('Zohaib'));
```

## Anonmyous Function
A function without a name, assigned to a variable. Common in callbacks or function expressions.
```c
// Anonmyous Function
let f=function(name){
    return `Hi, ${name}!`;
}

console.log(f('Zohaib'));
```

## Immediate Invoke function
Executes immediately after it's defined. Useful for creating isolated scopes.
```c
let f=function(name){
    console.log(`Hi, ${name}!`);
}('Zohaib');
```

## Arrow Functions
A concise syntax introduced in ES6. Doesn't bind its own 'this', ideal for shorter functions.

```c
let f=(name)=>{
  return `Hello, ${name}!`;
};

console.log(f("Zohaib")); 
```

## Function within Function Concept
The main parent function will return a child function in this case.

```c
function f(){
    return function(name){
        return    `Hello, ${name}!`;
    }
}

const a=f();
console.log(a("Zohaib"))
```
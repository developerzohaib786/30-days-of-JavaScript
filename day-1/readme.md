# Problem Statement
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

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
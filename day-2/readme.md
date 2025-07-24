# Problem Statement
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

# Useful Concepts
----------------------------------------------------------------------
## Closure in JavaScript
It allows a function to remember and access its lexical scope even when that function is executed outside its original scope.

```c
function outerFunction() {
    let counter = 0;

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const myClosure = outerFunction(); 
// outerFunction is called,
//  innerFunction is returned
myClosure(); // 1
myClosure(); // 2
myClosure(); // 3
```
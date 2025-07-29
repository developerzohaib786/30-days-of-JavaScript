## .reduce() method:
The .reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function on each element, one by one.
## Syntax
```c
array.reduce(function(total,currentValue,index, arr));
```
Let's have a example for better understanding.
```c
let arr=[1,2,3,4,5];
let sum=arr.reduce(addSum);

function addSum(a,b){
return a+b;
}

console.log(sum);
//output
//15
```

# Arrays in JavaScript

## Constructor Array
In JavaScript, the Array constructor is used to create a new array.
```c
let arr=new Array(2,3,4);
console.log(arr)
// output
// [ 2, 3, 4 ]
// similarly 
let arr2=new Array(2);
console.log(arr2);
// output
// [ <2 empty items> ]
```

## Array literals
This is the simple way of writing arrays and commonly used.
```c
let arr=[2,4,5]
console.log(arr)
// output
// 2,4,5
```

## .map() method in Arrays
This method creates another array by performing action on each element of array. The syntax of this method is given below:
#### Syntax:
```c
array.map(function(currentValue,index,arr));
```
Here is the example of the .map() method:
#### Example:
```c
let num=[1,2,3,4,5];
let arr=num.map((n,index)=>{
    return n+index;
});
console.log(arr);
//output
// [1,3,5,7,9]
```


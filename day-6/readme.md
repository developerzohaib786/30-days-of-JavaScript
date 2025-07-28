## .filter() method in Array
The filter() method in JavaScript is used to create a new array with only the elements that pass a certain condition (i.e., return true from a provided function).

#### Syntax
```c
array.filter(function(currentIndex,index,arr));
```

#### Example
Here is the given example:
```c
const marks=[70,80,90,40,30];
const filteredArray=marks.filter((currentValue,index)=>{
    return currentValue>70;
});
console.log(filteredArray);
//output 
// [80,90]
```




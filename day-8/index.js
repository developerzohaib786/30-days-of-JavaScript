const mulTwo=function (val){
return val*2;
}

const AddOne=function(a,b){
    return a+b;
}

const Square=function(val){
    return val*val;
}
function composeAll(...funs) {
    return function(...values) {
        return funs.reduce((val, fn) => fn(val), values);
    }
}

const result=composeAll(AddOne,mulTwo,Square)(5,10);
console.log(result);


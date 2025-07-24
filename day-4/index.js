
var createCounter = function(init) {
const initial= init;
    var obj={
        increment(){
            return init+=1;
        },
          reset(){
            return init=initial;
        },
         decrement(){
            return init-=1;
        },
      
    }
    return obj;
};


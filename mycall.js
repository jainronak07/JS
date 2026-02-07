//call
// function.call(obj, arg1, arg2, ...)


Function.prototype.mycall=function(context={},...args){
    if(typeof this!=='function'){
        throw new TypeError('Not a CALLABLE Function')

    }
    context.fn=this
    context.fn(...args)
   
}

const person={
    name:'John',
    age:30
}       
function greet(greeting){
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`)
}   

greet.mycall(person,'Hello') // Output: Hello, my name is John and I am 30 years old
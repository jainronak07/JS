//apply

Function.prototype.myapply=function(context,args=[])
{
    if(typeof this!=='function'){
        throw new TypeError('Not a CALLABLE Function')
    }
    if(Array.isArray(args)===false)
        {
            throw new TypeError('CreateListFromArrayLike called on non-object')
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

greet.myapply(person,['Hello'])
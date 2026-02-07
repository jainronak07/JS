//reduce

// Array.redcue((acc, num, i, arr) => { ... }, initialValue)

Array.prototype.myReduce=function(callback, initialValue){
    var acc=initialValue
    for(let i=0;i<this.length;i++){
        acc=acc?callback(acc,this[i],i,this):this[i]
    }
    return acc
}

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.myReduce((acc, num) => acc + num, 0)
console.log(sum) // Output: 15  nod
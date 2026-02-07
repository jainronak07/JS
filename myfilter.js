//filter
// Array.filter((num, i, arr) => { ... })


Array.prototype.myFilter = function (callback) {
    let temp=[]     
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            temp.push(this[i])
        }               
    }
    return temp
}

const num = [1, 2, 3, 4, 5]
const mod = num.myFilter(num => num % 2 === 0)
console.log(mod)
//map 
//syntax Array.map((num, i, arr) => { ... })

Array.prototype.myMap = function (callback) {
    let temp=[]
    for (let i = 0; i < this.length; i++) {
        {
            temp.push(callback(this[i], i, this))
        }
        
    }
    return temp
}

const nums = [1, 2, 3, 4, 5]
const squares = nums.myMap(num => num * num)
console.log(squares) // Output: [1, 4, 9, 16, 25]
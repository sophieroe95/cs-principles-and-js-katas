const array = [3, 6, 2, 10, 1, 23, 45, 2, 17, 8, 14, 33, 19, 22];
newArray = []

for (let i = 0; i < array.length; i++) {
    console.log(Math.max(...array))
    newArray.push(Math.max(...array))
}

console.log(newArray)

console.log(Math.max(...array))
// flattening

// → [1, 2, 3, 4, 5, 6]
var arrays = [[1, 2, 3], [4, 5], [6]];
var test = arrays.reduce(function(acc, x){
    return acc.concat(x);
})

console.log(test)

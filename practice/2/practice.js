var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);
var doubled = numbers.map(function(integer) {
    return integer * 2;
    });
    console.log(doubled)
    // VM177:4 (5) [2, 4, 6, 8, 10]
    // undefined
var doubled = numbers.map(function(carPrice) {
    return carPrice * 2;
    });
    console.log(doubled)
    // VM184:4 (5) [2, 4, 6, 8, 10]
    // undefined
let x = numbers.map(function(y) {
        return y+5;
    });
    console.log(x)
    // VM380:4 (5) [6, 7, 8, 9, 10]
'use strict';

console.log('1. Простые числа');
let i = 2;

while (i <= 100) {
    let checkNum = 2;
    while (checkNum < i) {
        if (i % checkNum == 0) break;
        checkNum++;
    }
    if (checkNum == i) {
        console.log(i);
    }
    i++;
}

console.log('2. Стоимость корзины');

//shoppingCart = [[goods, price, count], ..]
var shoppingCart = [['shoes', 12000, 2],
['coat', 15000, 1],
['blazer', 7000, 3],
['pants', 8000, 2],
['hat', 3000, 5]];

console.log(shoppingCart);

function countBasketPrice(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][1] * arr[i][2];
    }
    return result;
}

console.log(countBasketPrice(shoppingCart));

console.log('3. for(…){// здесь пусто}');

for (let i = 0; i < 10; console.log(i), i++) { }

console.log('4. Пирамида');

function paintingPiramid(count) {
    let paintingStr = 'x';
    while (paintingStr.length <= count) {
        console.log(paintingStr);
        paintingStr += 'x';
    }
}

paintingPiramid(20);


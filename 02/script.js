console.log('Задание 3');
function compare_number_if(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b)
    } else if (a < 0 && b < 0) {
        console.log(a * b)
    } else {
        console.log(a + b)
    }
}

function compare_number_switch(a, b) {
    switch (true) {
        case (a >= 0 && b >= 0):
            console.log(a - b);
            break;
        case (a < 0 && b < 0):
            console.log(a * b);
            break;
        default:
            console.log(a + b);
            break;
    }
}

compare_number_if(4, 5);
compare_number_if(-4, -5);
compare_number_if(-4, 5);

compare_number_switch(4, 5);
compare_number_switch(-4, -5);
compare_number_switch(-4, 5);

console.log('Задание 4')
var a = Math.floor(Math.random() * 16);

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

console.log('Задание 5')

function sum_nums(a, b) {
    return a + b;
}

function diff_nums(a, b) {
    return a - b;
}

function mult_nums(a, b) {
    return a * b;
}

function div_nums(a, b) {
    return a / b;
}

console.log(sum_nums(10, 2));
console.log(diff_nums(10, 2));
console.log(mult_nums(10, 2));
console.log(div_nums(10, 2));

console.log('Задание 6')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма':
            return sum_nums(arg1, arg2);
            break;
        case 'разность':
            return diff_nums(arg1, arg2);
            break;
        case 'умножение':
            return mult_nums(arg1, arg2);
            break;
        case 'деление':
            return div_nums(arg1, arg2);
            break;
        default:
            break;
    }
}

console.log(mathOperation(10, 5, 'сумма'));

console.log('Задание 7')

console.log(null == 0);
console.log(null >= 0);
console.log(null === 0);
console.log(null == undefined);
console.log(null === undefined);

console.log('Задание 8')

function power(val, pow) {
    while (pow != 1) {
        return val * power(val, pow - 1)
    }
    return val
}

a = +prompt('Введите число: ')
b = +prompt('Введите степень числа: ')

alert(power(a, b))

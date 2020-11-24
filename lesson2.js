// Task 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2 префиксная форма - сначала выполнится сложение, а затем вывод на экран
// d = b++; alert(d); // 1 постфиксная форма - сначала выполнится вывод на экран, а затем сложение
// c = (2 + ++a); alert(c); // 5 сначала выполнится сложение ++а (рез-т 3), а затем полученный результат прибавится к 2
// d = (2 + b++); alert(d); // 4 сначала выолнится сложение 2 + b (рез-т 4), а затем изменится результат у переменной b
// alert(a); // 3 после трех операций присваивания с прибавлением единицы, результат переменной а будет равен 3
// alert(b); // 3 после трех операций присваивания с прибавлением единицы, результат переменной b будет равен 3


//Task 2
var a = 2;
var x = 1 + (a *= 2);
console.log(x)
// Результат будет равен 5.
// Сначала выполняется операция в скобках: умножение, затем присваивание. 
// После сложение 1 + результат в скобках и присваивание результата к х


//Task 3
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;

var a = 5;
var b = -7;

if (a > 0 && b > 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    console.log(a + b);
}

//Task 4
//Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15.
var a = 7;

switch (a) {
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
    default:
        break;
}

// Task5
// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
//Обязательно использовать оператор return

function sum(x, y) {
    return x + y;
}

var sub = function (x, y) {
    return x - y;
}

var mult = function (x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}


//Task6
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
//В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(x, y, operation) {
    switch (operation) {
        case 'addition':
            return sum(x, y);
            break;
        case 'substraction':
            return sub(x, y);
            break;
        case 'multiplication':
            return mult(x, y);
            break;
        case 'division':
            return div(x, y);
            break;
        default:
            break;
    }
}
console.log(mathOperation(45, 13, 'division'))
'use strict'

// Task 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var i = 0;
while (i <= 100) {
    console.log(i++);
};

// Task2 Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
var store_products = {
    milk: 54, bread: 25, eggs: 98, tomatoes: 30, cucumber: 15, flour: 120, cheese: 45, tea: 17, coffee: 29,
    apples: 18, cake: 21, yogurt: 14, chicken: 150, beef: 300, salmon: 400, potatoes: 9, gum: 20
};

var my_products = ['chicken', 'tomatoes', 'milk', 'cheese', 'coffee', 'apples'];
function countBasketPrice(basket) {
    var price_count = 0;
    for (let product of basket) {
        price_count += store_products[product];
    }
    return price_count
};
console.log(countBasketPrice(my_products));

// Task 3 Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
for (let i = 0; i <= 9; console.log(i++)) {
};

// Task 4 Нарисовать пирамиду с 20 рядами с помощью console.log
for (let i = 'x'; i.length <= 20; i += 'x') {
    console.log(i)
};

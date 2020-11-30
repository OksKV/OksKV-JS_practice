// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function NumToObj(num) {
    if (num < 10) {
        let my_obj = {
            units: num
        }
        return my_obj
    }
    else if (num >= 10 && num < 100) {
        let my_obj = {
            units: String(num)[1],
            dozens: String(num)[0]
        }
        return my_obj
    }
    else if (num >= 100 && num < 1000) {
        let my_obj = {
            units: String(num)[2],
            dozens: String(num)[1],
            hundreds: String(num)[0]
        }
        return my_obj
    }
    else {
        console.log('Число превышает допустимые значения')
        let my_obj = {}
        return my_obj
    }
}
console.log(NumToObj(8))
console.log(NumToObj(50))
console.log(NumToObj(460))
console.log(NumToObj(6000))



// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.

var basket = {
    milk: 54,
    bread: 25,
    eggs: 98,
    tomatoes: 30,
    cucumber: 15,
    flour: 120,
    cheese: 45,
    tea: 17,
    coffee: 29,
    apples: 18,
    cake: 21,
    yogurt: 14,
    chicken: 150,
    beef: 300,
    salmon: 400,
    potatoes: 9,
    gum: 20,
    GetTheSum: function (...args) {
        return args.reduce(function (result, number) {
            return result + number
        })
    }
}

console.log(basket.GetTheSum(basket.salmon, basket.gum, basket.coffee))
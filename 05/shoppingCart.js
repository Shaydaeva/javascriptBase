'use strict';

console.log('2. Корзина');

//shoppingCart = [[goods, price, count], ..]
const shoppingCart = {
    containerElement: null,
    listElements: null,

    goods: [
        {
            product: 'shoes',
            quantity: 2,
            price: 12000
        },
        {
            product: 'coat',
            quantity: 1,
            price: 15000
        },
        {
            product: 'blazer',
            quantity: 3,
            price: 7000
        },
        {
            product: 'pants',
            quantity: 2,
            price: 8000
        },
        {
            product: 'hat',
            quantity: 5,
            price: 3000
        },
    ],

    countBasketPrice() {
        let resPrice = 0;
        let resQuan = 0;
        for (let i = 0; i < this.goods.length; i++) {
            resPrice += this.goods[i].quantity * this.goods[i].price;
            resQuan += this.goods[i].quantity;
        }
        return `В корзине ${resQuan} товаров на сумму ${resPrice} рублей`;
    },

    initList() {
        const colCount = 3;
        const rowCount = this.goods.length;
        // const titleBasket = ['', 'Наименование', 'Кол-во', 'Цена', 'Сумма'];

        this.containerElement = document.getElementById('basket');
        this.containerElement.innerHTML = '';
        this.cellElements = [];
        document.querySelector('div').insertAdjacentHTML('afterend', '<div id="total_price"></div>');
        const totalPrice = document.getElementById('total_price');

        if (this.goods.length) {
            for (let row = 0; row < rowCount; row++) {
                const trELem = document.createElement('tr');
                this.containerElement.appendChild(trELem);

                for (let col = 0; col < colCount; col++) {
                    const cell = document.createElement('td');
                    if (col === 0) {
                        cell.innerHTML = this.goods[row].product;
                    } else if (col === 1) {
                        cell.innerHTML = `${this.goods[row].quantity} шт.`;
                    } else if (col === 2) {
                        cell.innerHTML = `${this.goods[row].price} руб.`;
                    }

                    trELem.appendChild(cell);
                    this.cellElements.push(cell);
                }
            }
            totalPrice.innerHTML = `${this.countBasketPrice()}`;
        } else {
            totalPrice.innerHTML = "Корзина пуста";
        }
    },

    run() {
        this.initList();
    }

};


shoppingCart.run();

// var newLi = document.createElement("li");
// newLi.innerHTML = "Привет, мир!";
// list.appendChild(newLi);

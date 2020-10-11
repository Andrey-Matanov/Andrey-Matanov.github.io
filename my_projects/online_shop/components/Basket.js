export default class Basket {
    constructor(items, amount) {
        this.items = items;
        this.amount = amount;
    }

    render() {
        let basket = document.querySelector(".basket");
        let innerHTML = "";

        if (this.items.length == 0) {
            innerHTML += `<p class="basket__message">Ваша корзина пуста</p>`;
        } else {
            innerHTML += `<div class="basket__items">`;
            this.items.forEach((item) => {
                innerHTML += item.render();
            });
            innerHTML += "</div>";
        }

        innerHTML +=
            '<a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>';
        basket.innerHTML += innerHTML;
    }
}

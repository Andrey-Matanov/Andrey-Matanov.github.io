import { basketItemsContainer } from "./data.js";

let basketItems = basketItemsContainer;

const returnBasketItemsHTML = () => {
    let basketItemsHTML = "";

    basketItems.items.forEach(({ img, id, title, price, discount, amount }) => {
        basketItemsHTML += `
        <div class="goods__item">
            <img class="goods__item_img" src="../assets/${img}" width="100">
            <div class="goods__item_description">
                <p class="goods__item_id">Артикул: ${id}</p>
                <p class="goods__item_title">Название: ${title}</p>
                <p class="goods__item_price">Цена: ${price}</p>
                <p class="goods__item_discount">Скидка: ${discount}%</p>
                <p class="goods__item_amount">Количество: ${amount} шт.</p>
            </div>
        </div>
        `;
    });

    return basketItemsHTML;
};

const returnBasketDescriptionHTML = () => {
    let basketDescriptionHTML = `
    <h2 class="basket_description__heading">Итого</h2>
    <div class="basket_description__total_prices">
    <h4>Цены товаров (с учетом скидки):</h4>
    `;
    let totalBasketAmount = 0;
    let totalBasketPrice = 0;

    basketItems.items.forEach(({ title, price, discount, amount }) => {
        totalBasketAmount += amount;
        let totalPrice = ((price / 100) * (100 - discount)).toFixed(2) * amount;
        totalBasketPrice += totalPrice;

        basketDescriptionHTML += `<p>${title}: ${totalPrice} (за ${amount} шт.)</p>`;
    });

    basketDescriptionHTML += `
    </div>
    <p>Количество товаров в корзине: ${totalBasketAmount}</p>
    <p>Общая стоимость товаров в корзине: ${totalBasketPrice.toFixed(2)}</p>
    `;

    return basketDescriptionHTML;
};

const checkoutBasketHTML = () => {
    return `
    <div class="wrapper checkout_basket__wrapper">
        <div class="goods">
            ${returnBasketItemsHTML()}
        </div>
        <div class="basket_description">
            ${returnBasketDescriptionHTML()}
        </div>
    </div>

    `;
};

const initiateCheckoutBasket = () => {
    let checkout_basket = document.createElement("div");
    checkout_basket.classList.add("checkout_basket");
    checkout_basket.innerHTML = checkoutBasketHTML();
    document.querySelector(".top").appendChild(checkout_basket);
};

export default initiateCheckoutBasket;

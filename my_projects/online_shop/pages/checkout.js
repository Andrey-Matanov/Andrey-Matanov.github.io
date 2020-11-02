import { onScrollFunction } from "../common.js";
import Footer from "../components/Footer.js";
import { hostBus } from "../components/HostBus.js";

Vue.component("shop-header", {
    template: `
    <header class="header">
        <div class="wrapper header__wrapper">
            <a href="index.html" class="header__logo_link">
                <img class="header__logo" src="./assets/logo.jpg" alt="Logo" />
            </a>
            <nav class="nav">
                <div class="nav__link_container">
                    <a href="index.html" class="nav__link">Главная</a>
                </div>
                <div class="nav__link_container">
                    <a href="contacts.html" class="nav__link">Наши контакты</a>
                </div>
            </nav>
            <div class="header__buttons">
                <button class="header__account_button" type="button">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-circle"
                        class="svg-inline--fa fa-user-circle fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        width="30"
                        height="30"
                    >
                        <path
                            fill="#fff"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                        ></path>
                    </svg>
                </button>
                
            </div>
            <div class="basket" v-bind:class="{ basket_active: isBasketVisible }">
                <div class="basket__items">
                    <div v-if="isBasketEmpty">
                        <p class="basket__empty">В данный момент корзина пуста</p>
                    </div>
                    <div v-else v-for="item in items" class="basket__item">
                        <img
                            class="basket__item_image"
                            :src="fullPath50(item.img)"
                            :alt="item.title"
                        />
                        <p class="basket__item_description">
                            {{item.title}} x {{item.amount}}
                        </p>
                    </div>
                </div>
                <a class="basket__to_checkout_link" href="./checkout.html">Посмотреть/изменить содержимое корзины</a>
            </div>
        </div>
    </header>
    `,
    props: ["items"],
    data: function () {
        return {
            isBasketVisible: false,
            url: "./basket.json",
            basketItems: [],
        };
    },
    computed: {
        isBasketEmpty() {
            return this.basketItems.length == 0;
        },
    },
    methods: {
        makeGETRequest() {
            fetch(this.url)
                .then((response) => response.json())
                .then((data) => {
                    this.basketItems = data;
                })
                .catch(() => {
                    this.basketItems = "Корзина недоступна";
                });
        },
        fullPath50(path) {
            return `./assets/50x50/` + path;
        },
        addToCart(good) {
            let isItemFound = false;
            this.basketItems.map((item) => {
                if (item.fullname == good.fullname) {
                    item.amount++;
                    isItemFound = true;
                }
            });
            if (!isItemFound) {
                this.basketItems.push({ ...good, amount: 1 });
            }
        },
    },
    created() {
        hostBus.$on("addToBasket", this.addToCart);
    },
    mounted() {
        console.log(this.items);
        if (this.items === undefined) {
            this.makeGETRequest();
        } else {
            this.basketItems = JSON.parse(JSON.stringify(this.items));
        }
    },
    beforeDestroy() {
        hostBus.$off("addToBasket");
    },
});

const app = new Vue({
    el: ".root",
    components: {
        "shop-footer": Footer,
    },
    template: `
    <div class="root">
        <div class="top">
            <shop-header :items="basketItems"></shop-header>
            <div class="checkout_basket">
                <div v-if="isBasketEmpty" class="wrapper checkout_basket__empty">
                    <h1 class="checkout__empty_basket_heading">Корзина пуста</h1>
                    <p>Перейдите в <a href="index.html">каталог</a> и добавьте товары в корзину</p>
                </div>
                <div v-else class="wrapper checkout_basket__wrapper">
                    <div class="goods">
                        <div v-for="item in basketItems" class="goods__item">
                            <div class="goods__item_information">
                                <img
                                    class="goods__item_img"
                                    :src="fullPath100(item.img)"
                                    width="100"
                                    height="100"
                                />
                                <div class="goods__item_description">
                                    <p class="goods__item_id">
                                        Артикул: {{item.id}}
                                    </p>
                                    <p class="goods__item_title">
                                        Название: {{item.title}}
                                    </p>
                                    <p class="goods__item_category">
                                        Категория: {{item.category}}
                                    </p>
                                    <p class="goods__item_price">
                                        Цена: {{item.price}}
                                    </p>
                                    <p class="goods__item_discount">
                                        Скидка: {{item.discount}}%
                                    </p>
                                    <p class="goods__item_amount">
                                        Количество: {{item.amount}} шт.
                                    </p>
                                </div>
                            </div>
                            <div class="goods__item_buttons">
                                <button
                                    class="goods__item_add_button goods__item_button"
                                    :data-fullname="item.fullname"
                                    @click="addItem"
                                >
                                    +
                                </button>
                                <button
                                    class="goods__item_remove_button goods__item_button"
                                    :data-fullname="item.fullname"
                                    @click="removeItem"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="basket_description">
                        <h2 class="basket_description__heading">Итого</h2>
                        <div class="basket_description__total_prices">
                            <h4>Цены товаров (с учетом скидки):</h4>
                            <p v-for="item in basketItems">
                                {{item.title}}: {{item.amount * item.price / 100 *
                                (100 - item.discount)}} (за {{item.amount}} шт.)
                            </p>
                        </div>
                        <p>Количество товаров в корзине: {{totalAmount}}</p>
                        <p>Общая стоимость товаров в корзине: {{totalPrice}}</p>
                    </div>
                </div>
            </div>
            <button class="to_top_button" style="opacity: 0">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-up"
                    class="svg-inline--fa fa-arrow-up fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="30"
                    height="30"
                >
                    <path
                        fill="white"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                    ></path>
                </svg>
            </button>
        </div>
        <shop-footer></shop-footer>
    </div>

    `,
    data: {
        basketURL: "./basket.json",
        basketItems: [],
    },
    computed: {
        totalAmount() {
            return this.basketItems.reduce(
                (amount, current) => amount + current.amount,
                0
            );
        },
        totalPrice() {
            return this.basketItems.reduce(
                (price, current) => price + current.amount * current.price,
                0
            );
        },
        isBasketEmpty() {
            return this.basketItems.length == 0;
        },
    },
    methods: {
        makeGETRequest() {
            fetch(this.basketURL)
                .then((response) => response.json())
                .then((data) => {
                    this.basketItems = data;
                })
                .catch(() => {
                    this.basketItems = "Корзина недоступна";
                });
        },
        fullPath100(path) {
            return `./assets/100x100/` + path;
        },
        fullPath50(path) {
            return "../assets/50x50/" + path;
        },
        addItem(event) {
            const fullname = event.target.dataset.fullname;
            this.basketItems.forEach((item) => {
                if (item.fullname == fullname) {
                    item.amount++;
                }
            });
        },
        removeItem(event) {
            this.basketItems.forEach((basketItem) => {
                if (basketItem.fullname == event.target.dataset.fullname) {
                    basketItem.amount -= 1;
                    if (basketItem.amount == 0) {
                        const index = this.basketItems.indexOf(basketItem);
                        this.basketItems.splice(index, 1);
                    }
                }
            });
        },
    },
    created() {
        this.makeGETRequest(this.basketURL);
    },
    mounted() {
        onScrollFunction();
    },
});

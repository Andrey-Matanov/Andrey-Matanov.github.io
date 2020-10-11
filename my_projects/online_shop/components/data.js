import BasketItem from "./BasketItem.js";
import Basket from "./Basket.js";

export const goods = [
    {
        id: 115,
        title: "Футболка",
        price: 150,
        discount: 5,
        img: "tshirt.jpg",
    },
    {
        id: 234,
        title: "Носки",
        price: 50,
        discount: 0,
        img: "socks.jpg",
    },
    {
        id: 567,
        title: "Куртка",
        price: 350,
        discount: 5,
        img: "jacket.jpg",
    },
    {
        id: 875,
        title: "Мужские туфли",
        price: 250,
        discount: 10,
        img: "shoes.jpg",
    },
];

let basketItems = [
    new BasketItem("115", "Футболка", "5", "tshirt.jpg", 2, 150),
    new BasketItem("234", "Носки", "0", "socks.jpg", 4, 50),
    new BasketItem("567", "Куртка", "5", "jacket.jpg", 1, 350),
    new BasketItem("875", "Мужские туфли", "10", "shoes.jpg", 1, 250),
];

// let basketItems = [];

export let basketItemsContainer = new Basket(basketItems, basketItems.length);
console.log(basketItemsContainer);

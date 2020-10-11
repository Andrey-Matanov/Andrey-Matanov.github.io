import { goods } from "../components/data.js";

export const initiateGoodsList = () => {
    let goodsList = document.createElement("div");
    goodsList.classList.add("goods_list");

    document.querySelector(".catalog__wrapper").appendChild(goodsList);
};

const renderGoodsItem = (title, price, img) => {
    return `
    <div class="goods_item">
        <img class="goods_item__img" src="../assets/${img}" alt="${img}"></img>
        <div class="goods_item__text">
            <h3 class="goods_item__title">${title}</h3>
            <p>${price}</p>
        </div>
    </div>
    `.repeat(4);
};

export const renderGoodsList = (list = goods) => {
    list.map(
        ({ title = "Товар отсутствует", price = "0", img = "tshirt.jpg" }) =>
            (document.querySelector(".goods_list").innerHTML += renderGoodsItem(
                title,
                price,
                img
            ))
    );
};

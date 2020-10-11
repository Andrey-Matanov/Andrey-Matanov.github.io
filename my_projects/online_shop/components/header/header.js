import returnHeaderHTML from "./header_html.js";
import { basketItemsContainer } from "../data.js";

export const initiateHeader = () => {
    let header = document.createElement("header");
    header.classList.add("header");

    document.querySelector(".top").appendChild(header);
};

export const renderHeader = () => {
    document.querySelector(".header").innerHTML = returnHeaderHTML();

    let button = document.querySelector(".header__basket_button");
    let basket = document.querySelector(".basket");
    button.addEventListener("click", () => {
        basket.classList.toggle("basket_active");
    });

    basketItemsContainer.render();
};

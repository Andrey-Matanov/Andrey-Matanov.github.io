import initiateFooter from "../components/footer/footer.js";
import { initiateGoodsList, renderGoodsList } from "../components/GoodsList.js";
import { initiateHeader, renderHeader } from "../components/header/header.js";
import To_top_button from "../components/To_top_button.js";
import { onScrollFunction } from "../scripts/common.js";

const initiatePage = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    document.querySelector(".root").appendChild(top);

    initiateHeader();

    let catalog_wrapper = document.createElement("div");
    catalog_wrapper.classList.add("catalog__wrapper", "wrapper");
    top.appendChild(catalog_wrapper);

    initiateGoodsList();

    top.innerHTML += To_top_button();
    onScrollFunction();
    initiateFooter();
};

const renderPage = () => {
    renderHeader();
    renderGoodsList();
};

initiatePage();
renderPage();

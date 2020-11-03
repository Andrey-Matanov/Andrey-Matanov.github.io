const button = document.querySelector(".header__change_theme");

const aboutClassList = ["about", "about__heading", "about__second_heading"];
const contactMeClassList = ["contact_me", "contact_me__link"];
const footer = ["footer", "footer__text", "footer__link"];
const header = ["header", "header__link", "header__change_theme_icon"];
const myWorks = [
    "my_works",
    "my_works__heading",
    "my_works__project",
    "my_works__project_link",
];

const classList = [
    ...aboutClassList,
    ...contactMeClassList,
    ...footer,
    ...header,
    ...myWorks,
];

button.addEventListener("click", () => {
    classList.map((className) => {
        let list = document.querySelectorAll(`.${className}`);
        list.forEach((item) => {
            item.classList.toggle(`${className}__dark`);
        });
    });
});

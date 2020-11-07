const projects = document.querySelectorAll(".latest-projects-project");

//Создание HTML

const categoriesArray = document.querySelectorAll(
    ".latest-projects-project-description"
);
const uniqueCategories = new Set();
categoriesArray.forEach((item) => {
    uniqueCategories.add(item.innerHTML.trim());
});
const projectCategoriesContainer = document.querySelector(
    ".latest-projects-categories"
);

let projectCategoriesContainerHTML = `<button class="latest-projects-category latest-projects-category-active">All</button>`;
let arr = Array.from(uniqueCategories);
Array.from(uniqueCategories).forEach((item) => {
    projectCategoriesContainerHTML += `<button class="latest-projects-category">${item}</button>`;
});

projectCategoriesContainer.innerHTML = projectCategoriesContainerHTML;

//Навешивание обработчиков кнопок

const buttons = document.querySelectorAll(".latest-projects-category");

buttons.forEach((item) => {
    item.addEventListener("click", (event) => {
        const currentCategory = event.target.innerText;

        document
            .querySelector(".latest-projects-category-active")
            .classList.remove("latest-projects-category-active");
        event.target.classList.add("latest-projects-category-active");

        let projectsHTML = "";

        projects.forEach((item) => {
            const category = item.children[1].children[1].innerText.trim();
            const newItemHTML = `<div class="latest-projects-project">${item.innerHTML}</div>`;
            if (currentCategory == category) {
                projectsHTML += newItemHTML;
            } else if (currentCategory == "All") {
                projectsHTML += newItemHTML;
            }
        });

        document.querySelector(
            ".latest-projects-container"
        ).innerHTML = projectsHTML;
    });
});

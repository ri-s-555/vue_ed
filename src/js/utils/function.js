import { creatCardSell } from "../components/card";

export function gidrationTemplate(array, wrapperString) {
  let cardsArray = [];

  array.forEach((item) => {
    cardsArray.push(creatCardSell(item)); //гидрация
  });

  const cardsWrapper = document.createElement("div");
  cardsWrapper.classList.add(wrapperString);

  cardsArray.forEach((item) => {
    cardsWrapper.appendChild(item);
  });

  return cardsWrapper;
}

export function switchTabButton(dataArray, titleArray, blockSection, wrapperString, menuClass) {
  const menu = blockSection.querySelector(`.${menuClass}`);

  menu.addEventListener("click", (event) => {
    menu.querySelectorAll("button").forEach((item) => {
      item.classList.remove("menu__tab_button_active");
    });

    // Найти cardsWrapper и очистить его, затем применить gidrationTemplate
    let wrapper = blockSection.querySelector(`.${wrapperString}`);
    if (wrapper) {
      wrapper.remove(); // Удаляет и сам элемент wrapper со страницы
    }

    titleArray.forEach((title, index) => {
      if (event.target.innerText === title) {
        blockSection.appendChild(
          gidrationTemplate(dataArray[index], wrapperString)
        );
        event.target.classList.add("menu__tab_button_active");
      }
    });
  });
}



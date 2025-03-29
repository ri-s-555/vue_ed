// создать контейнер для модалки (див) / блюр
// див 2 модалка

import { createModalLogin } from "./modal_login.js";
import { createModalAddToCart } from "./modal_exes.js";

export function createModal(contentType) {
    const elemModal = document.createElement("div");
    elemModal.classList.add("modal");

    const elemModalContent = document.createElement("div");
    elemModalContent.classList.add("modal_content");

    const elemModalClose = document.createElement("button");
    elemModalClose.classList.add("modal_content_close");
    elemModalClose.innerHTML = "X";
    elemModalContent.appendChild(elemModalClose);

    let content; // модалки в зависимости от типы контента
    if (contentType === 'login') {
        content = createModalLogin(); 
    } else if (contentType === 'addToCart') {
        content = createModalAddToCart();
    }

    elemModalContent.appendChild(content);

    elemModalClose.addEventListener('click', function (event) {
        elemModal.remove();
    });

    elemModal.appendChild(elemModalContent);
    return elemModal;
}

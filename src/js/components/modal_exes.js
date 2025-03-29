export function createModalAddToCart() {
    const cartContent = document.createElement("div");
    cartContent.classList.add("modal_content_cart-item");

    const successMessage = document.createElement("p");
    successMessage.textContent = "Добавлено на страницу!";
    successMessage.classList.add("modal_content_cart-item__success");

    cartContent.appendChild(successMessage); 

    return cartContent;
}

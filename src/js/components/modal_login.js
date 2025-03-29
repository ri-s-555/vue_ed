import { createModal } from "./modal.js";

export function createModalLogin() {
    const loginContent = document.createElement("div");
    loginContent.classList.add("modal_content_login-form");

    const title = document.createElement("h2");
    title.textContent = "Войти";
    title.classList.add("modal_content_login-form__title");

    const loginInput = document.createElement("input");
    loginInput.type = "text";
    loginInput.placeholder = "Логин";
    loginInput.classList.add("modal_content_login-form__input");

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Пароль";
    passwordInput.classList.add("modal_content_login-form__input");

    const loginButton = document.createElement("button");
    loginButton.textContent = "Войти";
    loginButton.classList.add("modal_content_login-form__button");

    const successMessage = document.createElement("p");
    successMessage.textContent = "Успешно";
    successMessage.classList.add("modal_content_login-form__success");
    successMessage.style.display = "none";

    loginButton.addEventListener('click', function() {
        successMessage.style.display = "block";
        loginInput.style.display = "none";
        passwordInput.style.display = "none";
        loginButton.style.display = "none";
    });

    loginContent.appendChild(title);
    loginContent.appendChild(loginInput);
    loginContent.appendChild(passwordInput);
    loginContent.appendChild(loginButton);
    loginContent.appendChild(successMessage);

    return loginContent;
}



import createHead from "./head.js";
// import createHead from "./a1_head.js";
// import createHomePage from "./2_home_page.js";
import createFeaturedProducts from "./featured_products.js";
import createSellers from "./sellers.js";
import createTrendingEarphones from "./trending_earphones.js";
import createNewLaunches from "./new_launches.js";
import createFooter from "./footer.js";
import { createModal } from "./components/modal.js";

import '../scss/index.scss'


const bodyWrapper = document.querySelector("body");
bodyWrapper.appendChild(createHead ());
// bodyWrapper.appendChild(createHomePage ());
bodyWrapper.appendChild(createFeaturedProducts())
bodyWrapper.appendChild(createSellers())
bodyWrapper.appendChild(createTrendingEarphones())
bodyWrapper.appendChild(createNewLaunches())
bodyWrapper.appendChild(createFooter())


const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', function (event) {
    const modalWithLoginContent = createModal('login');
    bodyWrapper.appendChild(modalWithLoginContent);
});

const addToCartButtons = document.querySelectorAll('.button-add-to-card');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const modalWithCartContent = createModal('addToCart');
        bodyWrapper.appendChild(modalWithCartContent);
    });
});
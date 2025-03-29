export default function createFeaturedProducts () {

    const elem = document.createElement ("div")
    elem.classList.add("container", "featured-products");
    elem.innerHTML = `
        <div class="featured-products-sticker">
            <h class="featured-products-sticker_header">Apple wireless Airpod</h>
            <div class="featured-products-sticker_img">
                <img class="featured-products-sticker_img-img" src="./img/Featured_Products_1.png"
                    alt="featured-products_1">
                <img class="featured-products-sticker_img-img pos-rel-top" src="./img/Featured_Products_2.png"
                    alt="featured-products_2">
                <img class="featured-products-sticker_img-img" src="./img/Featured_Products_3.png"
                    alt="featured-products_3">
            </div>
            <div class="featured-products-sticker_price">
                <div class="featured-products-sticker_price-header">Price:</div>
                <div class="featured-products-sticker_price-value">$45,99</div>
            </div>
        </div>
        <div class="featured-products-descr">
            <div class="featured-products-descr_text">
                <h1 class="featured-products-descr_text_h">Our Featured Products</h1>
                <p class="featured-products-descr_text_p">Lorem ipsum is a placeholder text commonly <br>used to
                    demonstrate the visual form of a product</p>
            </div>
            <div class="featured-products-descr_button">
                <button class="button-add-to-card">Add to cart</button>
                <button class="button-more">View more</button>
            </div>
        </div>
    `
    return elem
}
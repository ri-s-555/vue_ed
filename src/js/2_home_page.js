// bodyWrapper.appendChild(createHomePage ());


export default function createcreateHomePage () {

    const elemHead = document.createElement ("div")
    elemHead.classList.add("container", "home-page");
    elemHead.innerHTML =
`
<div class="container home-page">
        <nav class="container menu">
            <ul>
                <li class="features">Features</li>
                <li class="products">Products</li>
                <li class="blog">Blog</li>
                <li class="about">About</li>
            </ul>
        </nav>
        <div class="container latest-product">
            <div class="latest-product__descr">
                <h1 class="latest-product__descr_title">Discover Our<br>Latest Products</h1>
                <p class="latest-product__descr_text">Lorem ipsum is a placeholder text commonly used to demonstrate
                    the visual form of a product</p>
                <div class="latest-product__descr_button">Buy Now</div>
                <div class="latest-product__descr_reviews">
                    <div class="latest-product__descr_reviews__img">
                        <img class="latest-product__descr_reviews__img-img" src="./img/Reviews_1.png" alt="reviews_1">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_2.png"
                            alt="reviews_2">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_3.png"
                            alt="reviews_3">
                        <img class="latest-product__descr_reviews__img-img pos-rel-left" src="./img/Reviews_4.png"
                            alt="reviews_4">
                    </div>
                    <div class="latest-product__descr_reviews__text">15k Well <br>Reviews</div>

                </div>
            </div>
            <div class="latest-product__img">
                <div class="latest-product__img-play-video">
                    <img class="latest-product__img-play-video-icon" src="./img/Play Video.png" alt="play-video-img">
                    <p class="latest-product__img-play-video-text">Play Video</p>
                </div>
                <div class="latest-product__img-product">
                    <svg class="star_left" width="53" height="53" viewBox="0 0 53 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
                            fill="#FFD600" />
                    </svg>
                    <svg class="latest-product__img-product-background" width="272" height="477" viewBox="0 0 272 477"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="272" height="477" rx="136" fill="#ECFEF4" />
                    </svg>
                    <img class="latest-product__img-product-product" src="./img/product_Red Beats Ml9c2zm:a.png"
                        width="270" height="299" alt="Red Beats Ml9c2zm/a">
                    <svg class="star_right" width="53" height="53" viewBox="0 0 53 53" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.5 0L33.6574 19.3426L53 26.5L33.6574 33.6574L26.5 53L19.3426 33.6574L0 26.5L19.3426 19.3426L26.5 0Z"
                            fill="#FFD600" />
                    </svg>
                </div>
            </div>
        </div>
`
    return elemHomePage
}
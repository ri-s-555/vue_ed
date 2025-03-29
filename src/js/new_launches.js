export default function createNewLaunches () {

    const elem = document.createElement ("div")
    elem.classList.add("container", "new-launches");
    elem.innerHTML = `
        <div class="new-launches__sticker">
            <img class="new-launches__sticker__img pos-rel-top" src="./img/New Launches_1.png" alt="new-launches_1">
            <img class="new-launches__sticker__img" src="./img/New Launches_2.png" alt="new-launches_2">
        </div>
        <div class="new-launches__descr">
            <div class="new-launches__descr__text">
                <h1 class="new-launches__descr__text__h">Airdrop 500 Anc</h1>
                <p class="new-launches__descr__text__p">Lorem ipsum is a placeholder text commonly used to <br>
                    demonstrate the visual form of a product ... Read More</p>
            </div>
            <div class="new-launches__descr__price">
                <div class="new-launches__descr__price__header">Price:</div>
                <div class="new-launches__descr__price__value">$45,99</div>
            </div>
            <div class="new-launches__descr__option-color">
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="21.5" r="21" fill="#111111" stroke="#FF0000" />
                </svg>
                <svg class="new-launches__descr__option-color__y" width="44" height="43" viewBox="0 0 44 43" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="22" cy="21.5" rx="22" ry="21.5" fill="#FFF500" />
                </svg>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21.5" cy="21.5" r="21.5" fill="#4484FF" />
                </svg>
            </div>
            <div class="new-launches__descr__button">
                <button class="button-add-to-card">Add to cart</button>
                <button class="button-more">Explore More</button>
            </div>
        </div>
    `
    return elem
}
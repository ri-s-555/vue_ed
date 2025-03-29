import { gidrationTemplate, switchTabButton } from "./utils/function.js";
import { createMenu } from "./components/menu.js";



const earbudsArray = [
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_3.png",
  },
]
const wirelessArray = [
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
  {
    color: "card-color_purpure",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
]
const wiredArray = [
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_1.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_3.png",
  },
  {
    color: "card-color_mint",
    colorSave: "",
    name: "Boat Rockerz 333",
    review: 75,
    price: 20,
    save: 0,
    image: "./img/Trending Earphones_2.png",
  },
]

export default function createTrendingEarphones() {
  const menu = createMenu(["Earbuds", "Wireless", "Wired"], "trending-earphones__menu");

  const elem = document.createElement("div");
  elem.classList.add("container", "trending-earphones");
  elem.innerHTML = `
    <div class="trending-earphones__header">Trending Earphones</div>
    <div class="trending-earphones__menu-wrapper"></div>
  `;

  elem.querySelector(".trending-earphones__menu-wrapper").appendChild(menu);

  elem.appendChild(gidrationTemplate(wirelessArray, "trending-earphones__product-wrapper"));
  switchTabButton( [earbudsArray, wirelessArray, wiredArray], ["Earbuds", "Wireless", "Wired"], elem, "trending-earphones__product-wrapper", "trending-earphones__menu");
  
  return elem;
}



// модалка логина
// к кнопке покупки модалка с сообщением: добавлено в корзину
//псевл=до классы и псивдо элементы
// наведение на кнопку с помощью ховер
// items-added-button сделать с помощью псевдоэлементов

// другие модалки отвечают за контент: шаблон отвечает за исполнение








// head
document.addEventListener('DOMContentLoaded', function() {
    searchTabButton();
});

//версия 2
function searchTabButton() {
    const searchButton = document.querySelector(".search-button");
    const searchInput = document.querySelector(".search-input");
    
    // Получаем все элементы, по которым будем искать
    const searchableElements = document.querySelectorAll(".featured-products-sticker_header, .new-launches__descr__text__h, .sellers-product__card-pick_descr__name");

    function clearActiveButtonClass() {
        searchButton.classList.remove("search-button_active");
    }

    function getSearchValue() {
        const value = searchInput.value.toLowerCase().trim();
        return value;
    }

    function filterItems(searchValue) {
        if (!searchValue) {
            // Если поиск пустой, показываем все элементы
            searchableElements.forEach(element => {
                const card = element.closest('.featured-products-sticker, .sellers-product__card, .new-launches__sticker');
                if (card) {
                    card.style.display = '';
                }
            });
            return;
        }

        searchableElements.forEach(element => {
            const card = element.closest('.featured-products-sticker, .sellers-product__card, .new-launches__sticker');
            if (card) {
                if (element.textContent.toLowerCase().includes(searchValue)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    function checkForNoMatches(searchValue) {
        if (!searchValue) return;

        const visibleCards = document.querySelectorAll('.featured-products-sticker:not([style*="display: none"]), .sellers-product__card:not([style*="display: none"]), .new-launches__sticker:not([style*="display: none"])');
        
        if (visibleCards.length === 0) {
            console.log("Ничего не найдено по запросу: " + searchValue);
            // Можно добавить отображение сообщения на странице
        }
    }

    function handleSearchButtonClick() {
        const searchValue = getSearchValue();
        
        // Добавляем активный класс кнопке
        clearActiveButtonClass();
        if (searchValue) {
            searchButton.classList.add("search-button_active");
        }

        filterItems(searchValue);
        checkForNoMatches(searchValue);
    }

    // Обработчики событий
    searchButton.addEventListener("click", handleSearchButtonClick);
    
    // Добавляем поиск по Enter
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            handleSearchButtonClick();
        }
    });
}




//версия 1
// function searchTabButton() {
//     const searchButton = document.querySelector(".search-button");
//     const searchInput = document.querySelector(".search-input");
//     const items = document.querySelectorAll(".item");

//     function clearActiveButtonClass() {
//         document.querySelectorAll(".search-button").forEach((button) => {
//             button.classList.remove("search__tab_button_active");
//         });
//     }

//     function getSearchValue() {
//         return searchInput.value.toLowerCase();
//     }

//     function filterItems(searchValue) {
//         items.forEach((item) => {
//             if (item.textContent.toLowerCase().includes(searchValue) && searchValue !== "") {
//                 item.classList.remove("hidden");
//             } else {
//                 item.classList.add("hidden");
//             }
//         });
//     }

//     function checkForNoMatches(searchValue) {
//         const visibleItems = [...items].filter((item) => !item.classList.contains("hidden"));
//         if (visibleItems.length === 0) {
//             console.log("Совпадений нет: " + searchValue);
//         }
//     }

//     function handleSearchButtonClick(event) {
//         clearActiveButtonClass();
//         const searchValue = getSearchValue();
//         filterItems(searchValue);
//         checkForNoMatches(searchValue);
//         event.target.classList.add("search__tab_button_active");
//     }

//     searchButton.addEventListener("click", handleSearchButtonClick);
// }

// featured-products
// универсальная функция для любой кнопки, посмотреть что можно сделать с классами
// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.querySelector('.featured-products-descr_button-add');

//     searchButton.addEventListener('click', function() {
//         searchButton.classList.add('tab_button_active_show');

//         setTimeout(function() {
//             searchButton.classList.remove('tab_button_active_show');
//         }, 5000); // 5000 мс / 5 сек
//     });
// });


// .button-add-to-card {
//     width: 263px;
//     height: 70px;
//     border-radius: 10px;
//     background: $primary-color;
//     border-color: rgba(0, 0, 0, 0);
//     box-shadow: 0px 25px 50px 0px rgba(132, 94, 194, 0.15);
//     font-size: 21px;
//     font-weight: 600;
//     line-height: 25.6px;
//     text-align: center;
//     color: rgba(255, 255, 255, 1);
  
//     &--wide {
//       width: 361px;
//     }
//     &_active_show {
//       background: rgb(24, 81, 56);
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     }
//   }
  
//   .button-more {
//     width: 230px;
//     height: 70px;
//     border-radius: 10px;
//     background: transparent;
//     border-color: rgba(0, 0, 0, 0);
//     font-size: 21px;
//     font-weight: 600;
//     line-height: 25.6px;
//     text-align: center;
//     color: rgba(255, 255, 255, 1);
//     margin-top: 20px;
//     box-shadow: 0px 3px 7px 0px rgba(255, 255, 255, 0.1);
//   }

// // идея оптимизации рейтинга в карточке
// ${getStarRating(review)} вместо свг

// function getStarRating(review) {
//     const filledStar = `
//       <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//            xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
//               fill="#C00C00" />
//       </svg>`;

//     const emptyStar = `
//       <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//            xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
//               stroke="#C00C00" fill="none"/>
//       </svg>`;

//     return filledStar.repeat(review) + emptyStar.repeat(5 - review);
//   }
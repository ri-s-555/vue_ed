export  function createMenu(tabs, menuClass) {

    const nav = document.createElement("nav");
   nav.classList.add(menuClass);

    const ul = document.createElement("ul");

    tabs.forEach((tab, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.classList.add("menu__tab_button");
      if (index === 0) {
        button.classList.add("menu__tab_button_active");
      }
      button.textContent = tab;
      li.appendChild(button);
      ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
  }
  

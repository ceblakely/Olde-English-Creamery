const titles = [...document.getElementsByTagName("h2")];
const menus = [...document.getElementsByTagName("section")];
const allMenus = document.getElementById("all-menus");

titles.forEach((option) => {
  option.addEventListener("click", (e) => {
    let current = document.getElementById(option.className);
    current.setAttribute("class", "active");
    menus.forEach((menu) => {
      if (menu !== current) {
        menu.setAttribute("class", "inactive");
      }
    });
    e.preventDefault();
  });
});

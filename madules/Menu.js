const Menu = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let menu = res.menu.map((elem) => {
    if (elem.dropdown.length === 0) {
      console.log(elem);
      return `
        <li class="menu">
        <a href=${elem.link}>${elem.name}</a>
        </li>
        `;
    } else {
      console.log(elem);
      return `
        <li>
              <a href="${elem.link}">${elem.name}</a>
              <ul>
                ${elem.dropdown.map((menu)=>{
                    return`
                    <li><a href="${menu.link}">${menu.name}</a></li>
                    `
                }).join("")}
              </ul>
            </li>
        `;
    }
  });
  document.querySelector(".menu").innerHTML = menu.join("");
};
export default Menu;

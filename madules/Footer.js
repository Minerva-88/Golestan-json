const Footer = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let footer = res.footer.map((elem) => {
    return `
    <div>
        <img src="${elem.image}" alt="icon" />
        <hr class="first" />
        <h3>${elem.title}</h3>
        <hr class="second" />
        <ul>
        ${elem.content.map((footer)=>{
            return `
             <li><a href="${footer.link}">${footer.title}</a></li>
            `;
        }).join("")}
        </ul>
      </div>
    `;
  });
  document.querySelector(".footer").innerHTML = footer.join("");
};
export default Footer;

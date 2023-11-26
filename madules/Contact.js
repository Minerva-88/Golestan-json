const Contact = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let contact = res.contact.map((elem) => {
    return `
    <a href="${elem.link}"
        ><img src="${elem.image}" alt="icon" /><img
          class="color"
          src="${elem.colored}"
          alt="icon"
      /></a>
    `;
  });
  document.querySelector(".contact").innerHTML = contact.join("");
};
export default Contact;

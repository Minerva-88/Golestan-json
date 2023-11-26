const Introduction = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let introduction = res.introduction.map((elem) => {
    return `
    <div><h3>${elem.title}</h3>
    <p>${elem.content}</p></div>
    `;
  });
  document.querySelector(".introduction").innerHTML = introduction.join("");
};
export default Introduction;

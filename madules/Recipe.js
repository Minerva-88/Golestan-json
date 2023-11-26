const Recipe = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let recipe = res.recipe.map((elem) => {
    return `
    <div class="part">
            <img src="${elem.image}" alt="recipe" />
            <div>
              <h4>${elem.title}</h4>
              <p>${elem.content}</p>
            </div>
            <a href="${elem.link}">${elem.input}</a>
          </div>
    `;
  });
  document.querySelector(".recipe").innerHTML = recipe.join("");
};
export default Recipe;

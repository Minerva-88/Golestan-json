const Photo = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let photo = res.photo.map((elem) => {
    return `
    <div>
            <img src="${elem.image}"/>
            <p>${elem.title}</p>
            <hr />
          </div>
    `;
  });
  document.querySelector(".photo").innerHTML = photo.join("");
};
export default Photo;

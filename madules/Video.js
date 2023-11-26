const Video = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let video = res.video.map((elem) => {
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
  document.querySelector(".video").innerHTML = video.join("");
};
export default Video;

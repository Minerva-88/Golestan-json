const Product = async () => {
  let data = await fetch("https://minerva-88.github.io/Json-Golestan/db.json");
  let res = await data.json();
  console.log(res);
  let product = res.product.map((elem)=>{
    return `
  <div class="photo">
          <img src="${elem.image}" />
          <div class="color"></div>
          <div>
            <h3>${elem.name}</h3>
            <h4>${elem.introduction}</h4>
          </div>
        </div>
        <hr />
        <div class="col-xxl-6 offset-xxl-3 col-lg-8 offset-lg-2">
          <h3>${elem.title}</h3>
          <p>${elem.contact}</p>
          <a href="${elem.link}">${elem.input1}</a>
        </div>
  `;
  }) 
  document.querySelector(".product").innerHTML = product.join("");
};
export default Product;

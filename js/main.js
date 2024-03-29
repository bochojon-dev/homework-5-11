const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");
const API = "https://fakestoreapi.com/users";

async function fetchData(api) {
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => createCard(res))
    .catch((err) => {
      console.log(err);
      localStorage.setItem("wishes", JSON.stringify(res));
    })
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API);

function createCard(data) {
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((product) => {
    let firstName = product.name;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div style="width:100%" data-id=${product.id}>
      <div name="product__image" class="card__image"></div>
          <h2 class="card__title">${firstName.firstname} ${firstName.lastname}</h2>
          <p title="" class="card__desc">
           email: ${product.email}
          </p>
          <div class="buttons">
            <button bame="select_wish">Like</button>
            <button>Cart</button>
      </div>
    </div>
    `;
    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}
const setWishes = (id) => {
  let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
  let index = wishes.findIndex((el) => el.id === +id);
  if (index < 0) {
    localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
  }
  // console.log("wish");
};
cards.addEventListener("click", (e) => {
  if ((e.target.name = "product__image")) {
    console.log("ok");
    let id = e.target.closest("[data-id]").dataset.id;
    singleRoate(id);
  } else if ((e.target.name = "product_wish")) {
    let id = e.target.closest("[data-id]").dataset.id;
    setWishes(id);
  }
});
const singleRoate = (id) => {
  window.open(`/pages/wishes.html?id=${id}`, "_self");
};
// ====== Navbar toggle =======
const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  navbarCollection.classList.toggle("show");
});

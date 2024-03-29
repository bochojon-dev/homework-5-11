// const API = "https://fakestoreapi.com/products";
// async function fetchData(api) {
//   let path = new URLSearchParams(window.location.search);
//   let id = path.get("id");
//   let getData = await fetch(`${api}/${id}`);
//   getData
//     .json()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }
// fetchData(API);
const API = "https://fakestoreapi.com/users";
const productSingle = document.querySelector(".wrapper");
const notFound = document.querySelector(".not_found");
const loading = document.querySelector(".loading");

async function fetchData(api) {
  let path = new URLSearchParams(window.location.search);
  let id = path.get("id");
  console.log(id);
  let getData = await fetch(api);
  getData
    .json()
    .then((res) => {
      console.log(res), createSingle(res);
    })
    .catch((err) => {
      console.log(err);
      notFound.style.display = "block";
    })
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API);

function createSingle(data) {
  //   let firstName = data;
  console.log(data);
  console.log(data.id);
  //   console.log(id);
  console.log(data.id);
  productSingle.innerHTML = `
  <div style="width:250px;" name="product__image" class="card__image"></div>
        <h2 class="card__title">${data.email} </h2>
        <p title="" class="card__desc">
         email: ${data.email}
        </p>
        <div class="buttons">
          <button>Like</button>
          <button>Cart</button>
        </div>

  `;
}

let wishes = JSON.parse(localStorage.getItem("wishes"));

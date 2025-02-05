let product_list_container = document.querySelector(".product_list_container");
const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader...", mycategory);

const productlist = document.querySelector(".list");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = mycategory;
// i fetchen under kun man sidst i linket tilføje ?limit=100 for at få vist fx. 100 eks.
fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        ` <a href="produkt.html?id=${product.id}">
            <div class="produkt_rabat">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" class="rabat ${!product.soldout && "rabat_sold"}"  alt="taske" />
            <h3>${product.productdisplayname}</h3>
            <h4>${product.category}, ${product.subcategory}, ${product.brandname}</h4>
            <p class="pris_tilbud ${product.price && "pris_tilbud_on"}">${product.price} DKK</p>
            <p class="discount ${product.discount && "discount_on"}">-${product.discount}%</p>
            <p class="sold_out ${!product.soldout && "skjul_on"}">Sold out</p>
          </div>
          </a>
          `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}

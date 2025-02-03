let product_list_container = document.querySelector(".product_list_container");

// i fetchen under kun man sidst i linket tilføje ?limit=100 for at få vist fx. 100 eks.
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `
            <div class="produkt_rabat">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" class="rabat" alt="taske" />
            <h3>${product.productdisplayname}</h3>
            <h4>${product.category}, ${product.subcategory}, ${product.brandname}</h4>
            <p class="pris_tilbud">${product.price} DKK</p>
            <p class="discount">-${product.discount}%</p>
          </div>`
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}

let produktbeskrivelser = document.querySelector(".produktbeskrivelser");
let productId = 1526;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    produktbeskrivelser.innerHTML = `
            <div>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" class="img_produkt" alt="taske" />
            </div>
            <div class="produkt_info">
          <p class="p_produkt">Product Information</p>
          <h3 class="displaynavn">${data.productdisplayname}</h3>
          <ul class="kategorier">
            <li class="info">
              Brandname:
              <p>Puma</p>
            </li>
            <li class="info">
              Gender:
              <p>Unisex</p>
            </li>
            <li class="info">
              Price:
              <p class="old_price">1299,-</p>
              <p class="discount_produkt">-54% discount</p>
            </li>
            <li class="info">
              Productionyear:
              <p>2010</p>
            </li>
            <li class="info">
              Usagetype:
              <p>Casual</p>
            </li>
            <li class="info">
              Season:
              <p>Fall</p>
            </li>
          </ul>
          <div class="choose_size">
            <label for="size">Choose a size:</label>
            <select id="size">
              <option>XS</option>
              <option>S</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div class="knapper">
            <div class="knap_kurv">
              <p class="knapper">Add to basket</p>
            </div>
            <div class="knap_buy">
              <p class="knapper">Add to favorites</p>
            </div>
          </div> 
        </div> 
        `;
  });

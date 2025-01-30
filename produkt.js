let produktbeskrivelser = document.querySelector(".produktbeskrivelser");
let productId = 1575;

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
              <p>${data.brandname}</p>
            </li>
            <li class="info">
              Gender:
              <p>${data.gender}</p>
            </li>
            <li class="info">
              Price:
              <p class="old_price">${data.price}-</p>
              <p class="discount_produkt">-${data.discount}% discount</p>
            </li>
            <li class="info">
              Productionyear:
              <p>${data.productionyear}</p>
            </li>
            <li class="info">
              Usagetype:
              <p>${data.usagetype}</p>
            </li>
            <li class="info">
              Season:
              <p>${data.season}</p>
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

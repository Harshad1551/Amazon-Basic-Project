// Below data represents the list (data structure:managed data)
const productsIMG = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6',
    rating: {
        numbers : 87,
        stars : 4.5
    },
    priceCents : 1090
},
{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        numbers : 127,
        stars : 4
    },
    priceCents : 2095
},
{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        numbers : 56,
        stars : 4.5
    },
    priceCents : 799
}
];
let productsHTML = '';
productsIMG.forEach((EachProduct)=>{
    productsHTML += `   <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${EachProduct.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${EachProduct.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${EachProduct.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
               ${EachProduct.rating.numbers}
            </div>
          </div>

          <div class="product-price">
            ${EachProduct.priceCents / 100}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML; 
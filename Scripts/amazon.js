// Below data represents the list (data structure:managed data)

//import { cart } from "../data/cart.js"; to get the file outside of folder

import { products } from "../data/products.js";
import { cartPush,updateCart } from "../data/cart.js";
import { FormatCurrency } from "./utils/money.js";
let productsHTML = '';

products.forEach((EachProduct)=>{
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
               ${EachProduct.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${FormatCurrency(EachProduct.priceCents)}
          </div>

          <div class="product-quantity-container ">
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

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-for-product = "${EachProduct.id}">
            Add to Cart
          </button>
        </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML; 



document.querySelectorAll('.add-to-cart-button').forEach((button)=>{
  button.addEventListener('click',()=>{

 const productID = button.dataset.forProduct;
 cartPush(productID);
    updateCart();
    })
 });
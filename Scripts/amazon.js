// Below data represents the list (data structure:managed data)

//import { cart } from "../data/cart.js"; to get the file outside of folder

import {products } from "../data/products.js";
import {cart, saveCart} from "../data/cart.js";
import {FormatCurrency} from "./utils/money.js";

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

          <div class="product-quantity-container">
            <select class="selector-id-${EachProduct.id}">
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

let assume = 0;
document.querySelector('.js-quantity').innerHTML = assume;
 function updateCart () {
    let totalQuantity = 0;

  cart.forEach((item) => {
    if(item.quantity === 0){
      
    }
      totalQuantity += item.quantity;
  });
  document.querySelector('.js-quantity').innerHTML = totalQuantity;
  
  }
  function cartPush(productID){
    let matching;
    const selectID = document.querySelector(`.selector-id-${productID}`)
    const ToSelect = Number.parseInt(selectID.value, 10);// the 10 is radix which means it is used to give the base for integer
   
    cart.forEach((Eachitem) => {
     if(productID === Eachitem.productID){
       matching = Eachitem;
     }
    });
    if(matching) {
     matching.quantity += ToSelect;
    } else {
    cart.push({
     productID: productID,
     quantity: ToSelect
    })
  }

  saveCart();
}

document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click',()=>{
 const productID = button.dataset.forProduct;

 //console.log(ToSelect)
    cartPush(productID);
    updateCart();
    });
 });

 updateCart();
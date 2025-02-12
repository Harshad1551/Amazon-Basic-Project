import {cart, removePTD} from "../data/cart.js";
import {products} from "../data/products.js";
import {FormatCurrency} from "./utils/money.js";
import { updateCheckoutCart } from "./utils/CalculateQnt.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from "../data/deliveryOption.js";

const todayDate = dayjs();
const check = todayDate.add(7,'days');
console.log(check)
let cartHTML ='';

cart.forEach((cartItem)=>{
const cartID = cartItem.productID;

let matchingProduct;

products.forEach((product)=>{
  if(product.id === cartID){
    matchingProduct = product;
  }
});

const deliveryOptionID = cartItem.deliveryOptionsID;
let matchingDate;
deliveryOptions.forEach((EachPTD)=>{
  
  if(EachPTD.id === deliveryOptionID){
    matchingDate = EachPTD;
  }
});
const today = dayjs();
      const date = today.add(matchingDate.deliveryDate,'days');
      const formatDate = date.format(
        'dddd,MMMM D'
      ); 

cartHTML += ` 
      <div class="cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${formatDate}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${FormatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-updateBTN" data-update-id="${matchingProduct.id}">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-deleteBTN" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div> 

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryHTML(matchingProduct.id,cartItem)}
              </div>
            </div>
          </div>
`
});

function deliveryHTML(matchingProductID , cartItem){
  let HTML = '';
    deliveryOptions.forEach((option)=>{
      const today = dayjs();
      const date = today.add(option.deliveryDate, 'days');
      const formatDate = date.format(
        'dddd,MMMM D'
      ); 
      const price = option.priceCents === 0 
      ?'FREE'
      : `$${FormatCurrency(option.priceCents)}`

      const isChecked = option.id === cartItem.deliveryOptionsID;
    HTML += `  <div class="delivery-option">
                  <input type="radio"
                  ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProductID}">
                  <div>
                    <div class="delivery-option-date">
                      ${formatDate}
                    </div>
                    <div class="delivery-option-price">
                      ${price}
                    </div>
                  </div>
                </div>
      `
    });
    return HTML
}
//console.log(cartHTML);
document.querySelector('.js-cart-items')
  .innerHTML = cartHTML;

    document.querySelector('.js-total-items').innerHTML = updateCheckoutCart();
  
document.querySelectorAll('.js-deleteBTN')
.forEach((link)=>{
    link.addEventListener('click', ()=>{
       const PTDid = link.dataset.productId;
       removePTD(PTDid);
      const SingleCart = document.querySelector(`.cart-item-container-${PTDid}`); 
        SingleCart.remove();
        document.querySelector('.js-total-items').innerHTML = updateCheckoutCart();
    });
}); 

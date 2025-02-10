import { cart,removePTD } from "../data/cart.js";
import { products } from "../data/products.js";
import { FormatCurrency } from "./utils/money.js";

let cartHTML = '';

cart.forEach((cartItem)=>{
const cartID = cartItem.productID;

let matchingID;

products.forEach((EachID)=>{
    if(EachID.id === cartID){
        matchingID = EachID;
    }
    
});

cartHTML += ` <div class="cart-item-container-${cartID} js-single-item">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingID.image}">
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingID.name}
                </div>
                <div class="product-price">
                  $${FormatCurrency(matchingID.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-deleteBTN" data-product-id="${cartItem.productID}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${cartID}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cartID}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${cartID}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
`
});

//console.log(cartHTML);
document.querySelector('.js-cart-items').innerHTML = cartHTML;



const deleteBTN = document.querySelectorAll('.js-deleteBTN');
deleteBTN.forEach((link)=>{
    link.addEventListener('click', ()=>{
       const PTDid = link.dataset.productId;
       removePTD(PTDid);
      const SingleCart = document.querySelector(`.cart-item-container-${PTDid}`); 
        SingleCart.remove();
    });
}); 
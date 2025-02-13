import { cart } from "../../data/cart.js";
import { toMatchPTD } from "../../data/products.js";
import { TogetDelivery } from "../../data/deliveryOption.js";
import { FormatCurrency } from "../utils/money.js";

export function paymentSummary(){
    let allPTDprice = 0;
    let shippingPrice = 0;
    cart.forEach((cartItem)=>{
            const product = toMatchPTD(cartItem.productID);
           allPTDprice  += product.priceCents * cartItem.quantity;
         // console.log(allPTDprice);
          const Charges = TogetDelivery(cartItem.deliveryOptionsID);
            shippingPrice += Charges.priceCents;
            //console.log(shippingPrice);     
    });
    const TotalBeforeTax = allPTDprice + shippingPrice;
          //  console.log(TotalBeforeTax);
            const EstimatedTax = TotalBeforeTax * 0.1;
            //console.log(EstimatedTax);
            const totalOrder = TotalBeforeTax + EstimatedTax;
       //     console.log(totalOrder);
            
           const TotalPaymentHTML = `
               <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${FormatCurrency(allPTDprice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${FormatCurrency(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${FormatCurrency(TotalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${FormatCurrency(EstimatedTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${FormatCurrency(totalOrder)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
            `
            document.querySelector('.js-total-order').innerHTML = TotalPaymentHTML;
        }

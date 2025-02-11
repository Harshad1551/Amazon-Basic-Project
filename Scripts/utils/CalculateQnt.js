import { cart } from "../../data/cart.js";

export function updateCheckoutCart(){
    let totalQuantity = 0; 

    cart.forEach((item) => {
      if(item.quantity === 0){
        
      }
        totalQuantity += item.quantity;
    });
    return totalQuantity;
}

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
cart = [];
}
export function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

 export function removePTD(PTDid){
      const newCart = [];

      cart.forEach((cartItem) => {
      if(cartItem.productID !== PTDid){
        newCart.push(cartItem);
      }  
      });
      cart = newCart;
      saveCart();
 }
//localStorage.clear();
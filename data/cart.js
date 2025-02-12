
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
cart =cart = [{
  productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionsID:'1'
 },{
  productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionsID:'2'
}];
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
//console.log(JSON.parse( localStorage.getItem('cart')));
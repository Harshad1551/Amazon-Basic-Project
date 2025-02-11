export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
cart = [{
    productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
   },{
    productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
  saveCart();
}
function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function cartPush(productID){
    let matching;

    cart.forEach((Eachitem) => {
     if(productID === Eachitem.productID){
       matching = Eachitem;
     }
    });
    if(matching) {
     matching.quantity += 1;
    } else {
    cart.push({
     productID: productID,
     quantity: 0
    })
  }

  saveCart();
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
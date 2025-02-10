export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart){
cart = [{
  productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:'2'
   },
  {
    productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:'2'
  },
  {
    productID:'83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity:'3'
  }];
 SaveToStorage();
}

function SaveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function cartPush(ID){
    let matching;

    cart.forEach((Eachitem)=>{
     if(ID === Eachitem.productID){
       matching = Eachitem;
     }
    });
    if(matching){
     matching.quantity += 1;
    }
    else{
    cart.push({
     productID: ID,
     quantity: 1
    })
    SaveToStorage();
  }
}

export function updateCart (){
  
    let totalQuantity = 0;
  cart.forEach((item)=>{
      totalQuantity += item.quantity;
  })
  document.querySelector('.js-quantity').innerHTML = totalQuantity;
  
  }


 export function removePTD(PTDid){
      const newCart = [];

      cart.forEach((EachOne)=>{
      if(EachOne.producutID !== PTDid){
        newCart.push(EachOne);
      }  
      });
      cart = newCart;
     SaveToStorage();
  }
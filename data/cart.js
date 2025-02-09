 const cart = []; // to send or export from outside this folder to another one 

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
   }
  }

export  function updateCart(){
  
    let totalQuantity = 0;
  cart.forEach((item)=>{
      totalQuantity += item.quantity;
  })
  document.querySelector('.js-quantity').innerHTML = totalQuantity;
  
  }

export const deliveryOptions = 
[{
    id: '1',
    deliveryDate: 7,
    priceCents: 0
},{
    id: '2',
    deliveryDate: 3,
    priceCents: 499
},{
    id: '3',
    deliveryDate: 1,
    priceCents: 999
}

];
export function TogetDelivery(deliveryOptionID){
    let matchingDate;

    deliveryOptions.forEach((EachPTD)=>{
      if(EachPTD.id === deliveryOptionID){
        matchingDate = EachPTD;
      }
    });
    return matchingDate || matchingDate[0];
    }
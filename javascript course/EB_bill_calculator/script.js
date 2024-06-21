
function  convert() {
let usedunit = Number(document.getElementById("input").value)
let price = 0;
if(usedunit<=50)
    {
        
        price = usedunit * 0.75;
    }
   else if( usedunit<=150)
   {
       
       price =  50* 0.75 + (usedunit - 50)* 1.00;
   }
   else if( usedunit<=250)
   {
       price = 50 * 0.75 +  100 * 1.00  +  (usedunit - 150) * 1.35 ;
   }
   else
   {
    price = 50 * 0.75 +  100 * 1.00  +  100 * 1.35  + (usedunit - 250)*1.7;   
   }

   let result = document.getElementById("result");

   result.innerHTML = `your EB price is ${price} `

}
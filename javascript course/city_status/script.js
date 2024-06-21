

const button = document.querySelector("button");

button.addEventListener("click",stats)
function stats(){

   const input =  document.getElementById("input");
   const city = input.options[input.selectedIndex].value
   
   let population = 0 ;   let litrature_rate  = 0 ; let language = ' ';



   switch (city) {
    
    
    
    case "Bangalore":

    population = 1234

    litrature_rate = 80

    language = "kanada"
        
    break;

    case "chennai":

    population = 456

    litrature_rate =  99

    language = "Tamil"
        
    break;
    
    case "Delhi":

    population = 789

    litrature_rate = 70

    language = "Hindi"
        
    break;

    case "Mumbai":

    population = 369
    litrature_rate = 90

    language = "Hindi"
        
    break;
   
    
        
   }
   let text = `The Indian city of ${city} has population of ${population} has a litrary rate of ${litrature_rate} and language spoken ${language}`
   let result = document.getElementById("result")
   result.innerHTML = text;

}

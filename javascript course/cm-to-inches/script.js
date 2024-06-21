function convert (){

let cmval = Number(document.getElementById('input').value);
let inchval = (cmval / 2.54).toFixed(3); // Rounds the result to 3 decimal places
let result = document.getElementById("result");
result.innerHTML = inchval + " inches";


}

let str1 = "my name is prakash";
 let str2 = "I am software Engineer";

 const str = "prakash";

// Generate a random index
const randomIndex = Math.floor(Math.random() * str.length);

// Get the character at the random index
const randomCharacter = str.charAt(randomIndex);

// Output the random character
console.log(randomCharacter);

let cities = ['tiruvannamalai','coimbature','madurai','selam']

console.log(cities[1]);
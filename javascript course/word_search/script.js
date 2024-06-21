
function convert()
{
  let input = document.getElementById('input').value  
let words = input.split(" ")
let len  = words.length
let result = document.getElementById("result")
result.innerHTML = len
}
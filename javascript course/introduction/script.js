function convert() {
    let cmval = Number(document.getElementById('input').value);
    let inchval = (cmval / 2.54).toFixed(3); // Rounds the result to 3 decimal places
    let result = document.getElementById("result");
    result.innerHTML = inchval;

    
}

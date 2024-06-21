const btn = document.getElementsByClassName("btn")[0];

const background =  document.getElementsByClassName("wrapper")[0]

const colorcode = document.getElementsByClassName("colorcode")[0];

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];





function rand(){

    let hexcolor = "#";

    

 let hexran =  Math.floor(Math.random()*16)
  


    return hex[hexran];

}

btn.addEventListener('click',color);


function color() 
{

    let hexcolor = "#";

    for(let i =1 ;i<= 6;i++)
        {
            hexcolor += rand(); 
        }
        background.style.backgroundColor = hexcolor;
        colorcode.innerHTML = hexcolor;

}


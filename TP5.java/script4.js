let nbr=Math.random()*100;
console.log(nbr);
let trouver=false;
nbr=Math.floor(nbr);
console.log(nbr);
let x=prompt("donner un nombre :");
x=parent(x);
while(trouver === false){
    if(x>nbr){
        alert("ce nombre est grand");
        x=prompt("donner un nombre ");
        x=parseInt(x);
    }else if(x<nbr){
        alert("ce nombre est petit");
    }else{
        alert("BINGO!!");
        trouver ===true;
    }
}
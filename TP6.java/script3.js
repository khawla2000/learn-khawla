var k = document.getElementById("conteneur");
var k1 = document.querySelector(".div1");
var k2 = document.querySelector(".div2");
var k3 = document.querySelector(".div3");
function init(){
   /* K.addEventListener('click', e=>{alert('div conteneur')});*/
    k1.addEventListener('click', e=>{alert('div 1')});
    k2.addEventListener('click', e=>{alert('div 2')});
    k3.addEventListener('click', e=>{alert('div 3')});
}
init();
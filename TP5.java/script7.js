var tab=[4,1,-5]
function additionne(x){
    return x+2
}
function soustrait(x){
    return x>=0?x-2:("Nombre nègatif!")
}
function affiche(){
    tab.forEach(a=> alert("additionne(a)"))
    tab.forEach(a=> alert("soustrait(a)"))
}
affiche()
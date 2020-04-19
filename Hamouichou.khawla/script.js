window.addEventListener("load",init);
const tab=["L’espoir est la foi qui tend sa main dans l’obscurité.","Quand il n’y a plus de chance, il y a encore de l’espoir.","Une porte de sortie est toujours une porte d’entrée ailleurs.","Rien ne s’est fait de grand qui ne soit une espérance exagérée.","C’est quand on n’a plus d’espoir qu’il ne faut désespérer de rien.","La vie nous donne toujours une seconde chance qui s’appelle demain.","L’espoir est la matière première avec laquelle la foi construit la maison.","L’espoir est de pouvoir voir qu’il y a de la lumière malgré toute la noirceur.","L’espoir c’est l’aube incertaine, c’est la dorure lointaine d’un rayon mystérieux.","Les espoirs constants attirent les circonstances et les événements correspondants."];
const fai=document.getElementById('p1');
const p3=document.getElementById('p3');
const p2=document.getElementById('p2');
const chrono=document.getElementById('chrono');

function init(){
    changer(tab);
    Refair();
    setInterval(text);
}
function changer(tab){
    const indi=Math.floor(Math.random()*10);
    p1.innerHTML=tab[indi];
}
//start-chrono-saisi-text
/*p3.addEventListener('keypress',function(){
    if(watch.isOn) 
    watch.stop();
  else 
    watch.start(); 
})*/
//declaration du new
var watch= new stop(chrono);

function stop(elem){
    this.isOn= false;
    var time=0;
    var interval;
    var offset;
    
    function update(){
        time+=delta();
        var formatedTime=timeFormateur(time);
        elem.textContent= formatedTime;
    }
    function delta(){
        var now=Date.now();
        var timePassed= now-offset;
        offset=now;
        return timePassed
    }
    function timeFormateur(timeInMilliseconds){
        var time = new Date(timeInMilliseconds);
        var min= time.getMinutes().toString();
        var sec= time.getSeconds().toString();
        var milsec=time.getMilliseconds().toString();
        if(min.length<2)
            min='0'+min;
    
        if(sec.length<2)
            sec='0'+sec;
        
        while(milsec.length<3){
            milsec='0'+milsec;
        }
        return min+ ':' +sec+ ':' +milsec
    }

    this.start=function(){
        if(!this.isOn){
            interval= setInterval(update,10);
            offset=Date.now();
            this.isOn=true;
        }
    };

    this.stop=function(){
        if(this.isOn){
            clearInterval(interval);
            interval=null;
            this.isOn=false;
        }

    }
    this.reset=function(){
         time=0;}
       
}
ref.addEventListener('click',init);

function Refair(){
    chrono.innerHTML= "00:00.000" ;
    p3.value='';
}
//choix
var indi=Math.floor(Math.random()*10);
var k=tab[indi];

function text(){
    let tap=p3.value;
    let b=k.substring(0,tap.length);
    if(tap==b){
        p2.style.backgroundColor='yellow';
        watch.stop();
    }else{
        if(tap==k){
            p2.style.backgroundColor='red';
        }else{
            p2.style.backgroundColor='blue';
        }
        p3.addEventListener('keypress',function(){
            let j=p3.value.length;
            if(j!=null)
            watch.start();
        });

    }
}

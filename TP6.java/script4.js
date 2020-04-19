function monter(){
    var date= new Date();
    var hour= date.getHours();
    var min= date.getMinutes();
    var s= date.getSeconds();

     hour=(hour<10)?"0"+ hour: hour;
     min=(min<10)?"0"+ min:min;
     s=(s<10)?"0"+ s: s;

    var time= hour+":"+min+":"+s;
    document.getElementById('montre').innerHTML=time;
    document.getElementById('montre').textContent=time;
    setTimeout(monter,1000);
}
monter();
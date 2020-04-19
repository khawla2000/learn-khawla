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
        return min+ 'min:' +sec+ 's:' +milsec+'ms'
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



var timer=document.getElementById('timer');
var s=document.getElementById('s');
var st=document.getElementById('st')
var r=document.getElementById('r');

var watch= new stop(timer);
st.addEventListener('click',function(){
    if(watch.isOn)
      watch.stop();})
s.addEventListener('click',function(){
    if(!watch.isOn)
    watch.start();
})
       
       


r.addEventListener('click', function(){
    watch.reset();
})
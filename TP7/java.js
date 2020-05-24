var list=document.getElementById("side");
//3etini wahede l haja mene hade site li hiya l beladane
/*function  divClecked(e){
    let httpReq=new XMLHttpRequest();
    httpReq.open("GET","https://api.covid19api.com/dayone/country/"+e.target,true); // hade sit fih les information ta3e l beledane
}*/

let httpReq=new XMLHttpRequest()
httpReq.open("GET","https://api.covid19api.com/countries",true); //  hade sit kanejejebedo meno ghi site d l belade
httpReq.onreadystatechange=function(){
    if(httpReq.readyState==4 && httpReq.status==200){
        let resp=JSON.parse(httpReq.response);
        resp.forEach(e=>{
            let d=document.createElement("div");
            d.setAttribute('id',e.IS02);
            d.innerHTML=e.Country;
            d.addEventListener("click",country_click);
            list.appendChild(d);

                //css f java
            d.style.backgroundColor="#00FFFF";
            d.style.marginTop="0.05cm";
            //la souri menine kadekhele l side ache ghadire
            d.onmouseover=function(){
                d.style.backgroundColor="blue";
                //pointeur seris kaytebedele
                d.style.cursor="pointer";
                // l keteba en gras menine katehete la seris
                d.style.fontWeight="bold";
            }
            //fache tekhereje la seris ireje3e dakechi kimakane
            d.onmouseout=function(){
                d.style.backgroundColor="#00FFFF";
                d.style.cursor="normal";
                d.style.fontWeight="normal";
            }

        })
    }
}
httpReq.send();
// lesinformation de graphe
function country_click(e2){
    var name_country = e2.target.innerHTML;
    var httpReq2 = new XMLHttpRequest();
    httpReq2.open("GET","https://api.covid19api.com/dayone/country/"+name_country,true);
    var tab_conf=[];
    var tab_gueri=[];
    var tab_mort=[];
    var tab_actif=[];
    var tab_date=[];
    httpReq2.onreadystatechange=function(){
        if(httpReq2.readyState==4 && httpReq2.status==200){
            let resp2=JSON.parse(httpReq2.response)
            for (let i=0;i<resp2.length; i++){
                tab_conf.push(resp2[i].Confirmed);
                tab_gueri.push(resp2[i].Recovered);
                tab_mort.push(resp2[i].Deaths);
                tab_actif.push(resp2[i].Active);
                tab_date.push(resp2[i].Date.slice(0,10));
         }
var ctx = document.getElementById('my chart').getContext('2d');
            if(window.bar!=undefined)
            window.bar.destroy();
            window.bar = new Chart (ctx, {

                type: 'line',

                data: {
                    labels:  tab_date,

                    datasets: [
                        {

                        label: 'Comfirmes',
                        data: tab_conf ,  
                        backgroundColor: ['rgb(107, 99, 255,0.2)'],
                        borderColor: ['blue',],
                    
                    
                    },
                        
                        {label: 'Gueris',
                        data: tab_gueri,
                        backgroundColor: ['rgb(0, 252, 46,0.2)'],
                        borderColor: ['green',]},
                        
                        {label: 'Deces',
                        data: tab_mort,
                        backgroundColor: ['rgb(252, 0, 50,0.2)'],
                        borderColor: ['red',] },
                    
                    
                        {label: 'Active',
                        data: tab_actif,
                        backgroundColor: ['rgb(244, 252, 0,0.2)'],
                        borderColor: ['yellow',] }
                    
                    
                    
                    ]
                },
                options: {      title: {
                                display: true,
                                text:  name_country ,
                            },
            
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
                                                    

    }

}
httpReq2.send();
}
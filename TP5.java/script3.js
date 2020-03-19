function somme(T){
    let S=0;
    for(let i=0;i<T.length;i++);{
        s+=T[i];
        return S;
    }
    let a=parseInt(prompt("a:"));
    while(!isNaN(a)){
        T.push(a);
        a=parseInt(prompt("a:"));
        let som=somme(T);
        console.log(som);
        let T=new Array();
        for (let i=0;i<4;i++){
        let a=prompt("donnez un nombre");
        T.push(parseInt(a));
         console.log(T);
            
        }
    }
}
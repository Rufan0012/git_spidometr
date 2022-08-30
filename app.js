const Tormoz=document.getElementById(`Tormoz`)
const QazVer=document.getElementById(`QazVer`)

let suret=0;
eqreb.style.transform = `rotate(${suret}deq)`

Tormoz.onclick=function(){
    if(suret<=0){
        suret=0
        console.log(`bele sey olmur`)
        eqreb.style.transform=`rotate(${suret}deg)`
        return;
    }
    suret=suret-10
    eqreb.style.transform=`rotate(${suret}deg)`
}
QazVer.onclick=function(){
    if(suret>=180){
        suret=180
        eqreb.style.transform=`rotate(${suret}deg)`
        console.log(`motor dagilacaq!!!`)
        return;
    }
    suret=suret+10
    eqreb.style.transform=`rotate(${suret}deg)`
} 

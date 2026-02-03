const mynum=document.getElementById("mynum");
const celToFar=document.getElementById("celToFar");
const farToCel=document.getElementById("farToCel");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("result");

mysubmit.onclick = function(event){
    event.preventDefault();
    let value;
    value= Number(mynum.value);
    if (celToFar.checked){
        value =value*9/5 +32 ;
        result.textContent = value.toFixed(2) + "F";
    }
    else if(farToCel.checked){
        value =(value-32) * (5/9) ;
        result.textContent = value.toFixed(2) + "C"
    }
    else{
        result.textContent = "Select a unit";
    }
}
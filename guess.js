const myguess=document.getElementById("myguess");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("result");

let answer = Math.floor(Math.random()*100)+1;

let attempts=1;
mysubmit.onclick = function() {
    let guess = Number(myguess.value);
    
    if(guess == answer){
        result.textContent = `Congratulations! You are win in ${attempts} attempts.`
    }
    else if (guess<= answer){
        result.textContent = "You guess is too low!"
    }
    else{
        result.textContent = "You guess is too high!"
    }
    attempts++
}
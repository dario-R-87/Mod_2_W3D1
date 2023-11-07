const timerElem = document.querySelector("#timer");
let counter = 60;
timerElem.innerText = counter;

const timer = function(){
 if(counter===60)
  timerElem.classList.add("animation");
 counter -= 1;
 timerElem.innerText = counter;
 if(counter === 0){
  clearInterval(t);
  timerElem.innerText = "";
 }
}

const t = setInterval(timer,1000);


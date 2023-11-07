/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
let crazySum = function(a, b){
 let sum = a + b;
 if(a === b){
  return sum*3; 
 }
 return sum;
}

let c=5;
let d=5;
let e=6;
let f=7;
let r1 = crazySum(c,d);
let r2 = crazySum(e,f);
console.log(r1);
console.log(r2);
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
let boundary = function(a) {
 if(a>20 && a<=100 || a===400)
  return true;

 return false;
}

let b=350;
let c=97;
console.log(boundary(b));
console.log(boundary(c));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let reverseString = function (str) {
  let revStr = "";
  for (let i = str.length; i > 0; i--) {
    revStr += str.charAt(i - 1);
  }
  return revStr;
};

let string = "i topi non avevano nipoti";
let revString = reverseString(string);
console.log(revString);
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


let upperFirst = function(str) {
 let modStr="";

 for(let i=0; i<str.length; i++){
  if((i>0 && str.charAt(i-1)===' ') || i===0)
   modStr += str.charAt(i).toUpperCase();
  else
   modStr += str.charAt(i);
 }

 return modStr;
}

let string =  "   i topi non avevano nipoti";
let modString = upperFirst(string);
console.log(modString);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
let giveMeRandom = function (n) {
  let randomNumberArray = [];
  for (let i = 0; i < n; i++) {
    currentNumber = Math.floor(Math.random() * 11);
    randomNumberArray.push(currentNumber);
  }

  return randomNumberArray;
};

let resultArray = giveMeRandom(100);
console.log(resultArray);
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
let area = function(l1, l2){
 let areaRettangolo = l1*l2;
 return areaRettangolo;
}

let a = 34;
let b = 56;
let areaRett = area(a,b);
console.log(areaRett);
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
let crazyDiff = function(a){
 let absDiff = Math.abs(a-19);
 if(absDiff>19)
  return absDiff*3;

 return absDiff;
}

let b=7;
let c=77;
let r1=crazyDiff(b);
let r2=crazyDiff(c);
console.log(r1);
console.log(r2);
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
let codify = function(str){
 
 if(str.indexOf("code")===0)
  return str;
 else
  return "code "+str;
}

let stringa_1 = "c'era code una volta topolino...";
let res_1 = codify(stringa_1);
console.log(res_1);
let stringa_2 =    "    code Azzurro, il pomeriggio è tutto azzurro e lungo per me";
let res_2 = codify(stringa_2);
console.log(res_2);
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
let check3and7 = function(a){
 if(a%3===0 || a%7===0)
  return true;

 return false;
}

let b=17;
let c=9;
let d=14;
console.log(check3and7(b));
console.log(check3and7(c));
console.log(check3and7(d));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
let cutString = function(str){
 let modStr = str.trim();
 modStr = modStr.slice(1,modStr.length-1);
 return modStr;
}

let string = " ciao come va ";
let res = cutString(string);
console.log(res);
*/

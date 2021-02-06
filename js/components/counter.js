/*
Reikalavimai:
-rasti vieta/elementa
-istraukti skaiciu
-kas sekunde ta skaiciu mazinti iki nulio
-pasiekus nuli - parasyti FINITO
*/

function counter(selector) {
   const DOM = document.querySelector(selector);
   const number = DOM.textContent;

   console.log(number);
}

export { counter }
// Creo le variabili al cui interno posizionerò gli elementi nascosti all'interno del burger : tutti i link con div.header-right > a / tutto quello che ce dentro hamburger-menu he in origine ha una proprietà display:none / dopodichè mi servirà una ulteriore variabile per chiudere il menu, e la assegnerò al link con icona X che compare al click del menu burger.

var menu = $('div.header-right > a');
var sottoMenu = $('.hamburger-menu');
var sottoMenuClose = $('.hamburger-menu > a.close');

// Ora creo la funzione che al click della mia variabile menu, aprirà il sottoMenu, con una velocità di 1s.
menu.click(function(){
     sottoMenu.show(1000);
 });
// Mentre ora, al click della mia variabile sottoMenuClose, il mio sottoMenu scomparirà, con una velocità di 1s.
sottoMenuClose.click(function(){
    sottoMenu.hide(1000);
 });


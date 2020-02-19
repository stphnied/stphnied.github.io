"use strict";
/**
 * Fonctions exécutée lors du chargement de la page
 *
 * @param 	aucun
 * @return	true
 */

 var d = document;

(function(){ //IIFE

        //Scroll down btn qui mene vers la prochaine section
        d.querySelector("#sectionBtnDown").addEventListener("click", function () {
            d.body.scrollTop = window.innerHeight; //Safari
            d.documentElement.scrollTop = window.innerHeight;
        });

        //Parallax hover
        
})();
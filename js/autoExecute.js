"use strict";
/**
 * Fonctions exécutée lors du chargement de la page
 *
 */
(function(){ //IIFE

 //Scroll down btn qui mene vers la prochaine section
 d.querySelector("#sectionBtnDown").addEventListener("click", function () {
     d.body.scrollTop = window.innerHeight; //Safari
     d.documentElement.scrollTop = window.innerHeight;
 });

 // Change page title 
 window.addEventListener("scroll", function () {
     const 
        sect = d.querySelectorAll("section"),
        titreSect = [" ", "About", "Work", "Contact"];
     // Homepage
     if (window.scrollY === (sect[0].offsetTop)) {
         sectionName.innerHTML = titreSect[0];
     }

     if (window.scrollY === (sect[0].offsetHeight + sect[0].offsetTop)) {
         sectionName.innerHTML = titreSect[1];
     }
     // About page
     if (window.scrollY === (sect[1].offsetHeight + sect[1].offsetTop)) {
         sectionName.innerHTML = titreSect[2];
     }

     // Work page
     if (window.scrollY === (sect[2].offsetHeight + sect[2].offsetTop)) {
         sectionName.innerHTML = titreSect[3];
     }

     // Contact page
     if (window.scrollY === (sect[3].offsetHeight + sect[3].offsetTop)) {
         sectionName.innerHTML = titreSect[4];
     }
 });

    // Comportements liés au défilement à travers le site
     window.addEventListener("scroll", appearScrollAnim);
    
    //Toggle mobile menu button
    d.querySelector("#mobileMenu").addEventListener("click", function () {
        const btnMenu = d.querySelector(".btnMenu");
        btnMenu.classList.toggle('active');
        d.querySelector('#mobileMenu').style.opacity = 1;
        });

    // Button checked to switch between work categories
     d.querySelector("#gameBtn").addEventListener("click", fShowGame);
     d.querySelector("#mayaBtn").addEventListener("click", fShow3D);


    // MOBILE : au scroll DOWN, réduit opacité du logo et du nav
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            d.querySelector('header').style.opacity = 0.7;
            d.querySelector('#mobileMenu').style.opacity = 0.7;


        } else {
            d.querySelector("header").style.opacity = 1;
            d.querySelector('#mobileMenu').style.opacity = 0.3;

        }
        prevScrollpos = currentScrollPos;
    }
})();


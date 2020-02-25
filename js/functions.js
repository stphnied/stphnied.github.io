"use strict";

var d = document;

/**
 *Fonction permettant d'ecrire les mots dans l'array
 *@param 
 *@return
 */
var aJobPosition = ["\xa0Web\xa0designer\xa0", "\xa0Game\xa0designer\xa0", "\xa0Graphic\xa0designer\xa0","\xa0UI\xa0designer\xa0"];
var textBox = d.getElementById('textDesigner');
var cursor = d.createElement('span');
var letters = [];

function writeTexte(i, j, arr) {
    var aPos = arr[i];
    if (aPos === undefined) return;
    if (j === aPos.length) {
        if (i === arr.length - 1) {
            setTimeout(function () {
                letters[letters.length - 1].style.border = "none";
            }, 3000);
            return;
        }
        // Appel la fonction pour detruire le texte
        setTimeout(function () {
            delTexte(i, arr);
        }, 2000);
        return;
    }

    // Creer un element pour contenir le texte
    var c = d.createElement('h2');
    c.innerHTML = aPos.charAt(j)
    letters.push(c);
    textBox.appendChild(c);

    setTimeout(function () {
        j++;
        writeTexte(i, j, arr);
    }, Math.random() * 100 + 70);
}

/**
 *Fonction permettant de supprimer les mots 
 *@param 
 *@return
 */
function delTexte(i, arr) {
    if (letters.length < 1) {
        i++;
        setTimeout(function () {
            writeTexte(i, 0, arr);
        }, 1500);
        return;
    }
    var c = letters.pop();
    setTimeout(function () {
        textBox.removeChild(c);
        delTexte(i, arr);
    }, Math.random() * 100 + 30);
}

setTimeout(function () {
    writeTexte(0, 0, aJobPosition);
}, 2500);


/**
 * Fonction permettant de jouer l'anim apres le defil
 * ----------------------
 * @param aucun
 * @return aucun
 */
function appearScrollAnim() {
    var fHauteurSection = window.innerHeight;
    var fDefileDocElm = d.documentElement.scrollTop;
    // var oOrdi = window.matchMedia("(min-width: 1024px)");
    // var oMobile = window.matchMedia("(max-width: 767px");
    // var oActivites = d.getElementsByClassName("sousActivites");

    var sectAboutMe = d.querySelector(".aboutMe").style;
    var sectSkills = d.querySelector(".skills").style;
    var sectContactLine = d.querySelector(".verticalLine2").style;
    var sectContactTitle = d.querySelector(".contactTitre").style


    //Page About

    if (fDefileDocElm <= fHauteurSection) {

    }

    if (fDefileDocElm == fHauteurSection) {
        sectAboutMe.animation = "leftSlideIn 1s forwards";
        sectSkills.animation = "rightSlideIn 1s forwards 0.5s";
    }
    // Remove anim
    if (fDefileDocElm >= fHauteurSection * 2) {
        sectAboutMe.removeProperty("animation");
        sectSkills.removeProperty("animation");
    }

    if (fDefileDocElm == fHauteurSection * 2) {
        // var cardWork = d.querySelectorAll(".cardWork");
        // let i = 0;
        // setInterval(function () {
        //     if (i < cardWork.length) {
        //         cardWork[i].style.animation = "txtSlideDown 1s forwards";
        //         i++;
        //         console.log("aaaa");
        //     }
        // }, 250);
    }

    // Page contact
    if (fDefileDocElm == fHauteurSection * 3) {
        sectContactLine.animation = "txtSlideDown 1s forwards";
        sectContactTitle.animation = "txtSlideDown 1s forwards";
    }

}
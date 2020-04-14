"use strict";

const d = document;

/**
 *Fonction permettant d'ecrire les mots dans l'array
 *@param 
 *@return
 */
const 
    aJobPosition = ["\xa0Web\xa0design\xa0", "\xa0Game\xa0design\xa0", "\xa0Graphic\xa0design\xa0", "\xa0UI\xa0design\xa0"],
    textBox = d.getElementById('textDesigner'),
    cursor = d.createElement('span'),
    letters = [];

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

    const 
        fHauteurSection = window.innerHeight,
        fDefileDocElm = d.documentElement.scrollTop,
        sectAboutMe = d.querySelector(".aboutMe").style,
        sectSkills = d.querySelector(".skills").style,
        sectGame = d.querySelector(".workGame").style,
        sectMaya = d.querySelector(".workMaya").style,
        btnWork = d.querySelector(".radioContainer").style,
        sectContactTitle = d.querySelector(".contactTitre").style,
        sectContactSubTitle = d.querySelector(".contactSoustitre").style,
        lienContact = d.querySelector(".lienContact").style,
        sectLiens = d.querySelector(".titleFooter").style,
        bigScreen = window.matchMedia("(min-width: 768px)");

    //Page About
    if (bigScreen.matches ) {
        if (fDefileDocElm <= fHauteurSection) {
            // Cacher les liens sociaux au debut
            sectLiens.opacity = "0";
            sectLiens.removeProperty("animation");
        }

        if (fDefileDocElm == fHauteurSection) {
            // Cotenu a propos
            sectAboutMe.animation = "leftSlideIn 1s forwards";
            sectSkills.animation = "rightSlideIn 1s forwards 0.5s";

            //liens sociaux
            sectLiens.animation = "leftSlideIn 1s forwards";
        }

        if (fDefileDocElm >= fHauteurSection * 2) {
            // anim work
            sectGame.animation = "popUp 1s forwards";
            sectMaya.animation = "popUp 1s forwards";
            btnWork.animation = "txtSlideDown 1s forwards 0.5s"
        }

        if (fDefileDocElm == fHauteurSection * 2) {
        }

        // Page contact
        if (fDefileDocElm >= fHauteurSection * 3) {
            sectContactTitle.animation = "txtSlideDown 1s forwards";
            sectContactSubTitle.animation = "txtSlideDown 1.5s forwards";
            lienContact.animation = "leftSlideIn 1.5s 1s forwards";
        }
    }
}

// Fonction permettant d'afficher la galerie d'image correspondante a sa categorie
function fShowGame() {
    const gameBtn = d.querySelectorAll('input[name="workCategorie"]')[0];
        d.querySelector(".workGame").style.display = "grid";
        d.querySelector(".work3D").style.display = "none";
}

function fShow3D() {
    const mayaBtn = d.querySelectorAll('input[name="workCategorie"]')[1];
    d.querySelector(".workGame").style.display = "none";
    d.querySelector(".work3D").style.display = "grid";
}
/**
 *Fonction permettant d'ecrire les mots dans l'array
 *@param 
 *@return
 */
var jobPosition = ["\xa0Web\xa0designer\xa0", "\xa0Game\xa0designer\xa0", "\xa0Graphic\xa0designer\xa0","\xa0UI\xa0designer\xa0"];
var textBox = document.getElementById('textDesigner');
var cursor = document.createElement('span');
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
    var c = document.createElement('h2');
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
    writeTexte(0, 0, jobPosition);
}, 2500);




    //  let test = document.getElementById("work1");

    //  test.addEventListener("mouseover", function (event) {
    //      event.target.style.transform = "translateZ(2px)";
    //      setTimeout(function () {
    //          event.target.style.transform = "";
    //      }, 500);
    //  }, false);


    
    
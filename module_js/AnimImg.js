import {
    Util
} from './Util.js'


export class AnimImg {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesImages - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
         
     }}
     */

    constructor(lesImages, elementParent) {
        //Récupérer les valeurs passées en paramètre			
        this.lesImages = lesImages
        this.elmParent = elementParent
        this.LesImages(this.lesImages)
    }


    LesImages(lesImages) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
       let i = 0;
       let nbImg = lesImages.length;

        for (let uneImage of lesImages){
            let elmImage = this.creerElement(this.elmParent, 'img', uneImage, 'lesimg')
            elmImage.style.animationDelay = (i * 0.5) + "s";
            
        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.src = contenu;
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}
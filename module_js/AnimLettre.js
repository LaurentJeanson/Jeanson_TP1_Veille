import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres
        this.elmParent = elementParent
        this.AnimLettre(this.lesLettres)
        this.fonction = fonction
    }


    AnimLettre(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
       let i = 0;
       const tabCouleur = ['#fed136', '#BFB000' , '#FFEA00', '#403B00', '#E5D300','#fed136']
       let nbLettres = lesLettres.length;
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'mot')
            
        for (let uneLettre of lesLettres){
            let elmLettre = this.creerElement(elmConteneur, 'div', uneLettre, 'mot')
            elmLettre.style.animationDelay = (i * 0.5) + "s";
            elmLettre.style.color = tabCouleur[(i++)%5]    
        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
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
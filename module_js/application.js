
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('.header')
let intro = new Introduction(contenuIntro, elmHeader, animationLettre, animationLettreImg)

// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Section-image'
	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim)	
}
function animationLettreImg()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre Img')
	const lesLettresImg = 'Section-Image'
	let  monAnimLettreImg = new AnimLettre(lesLettresImg)	
}

function finAnim()
{
	console.log('animation terminée')
}










	




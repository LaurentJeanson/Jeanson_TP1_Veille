
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //
import {AnimImg} from './AnimImg.js' //


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('.header')
let elmContenu = document.querySelector('.content')
let intro = new Introduction(contenuIntro, elmHeader, animationLettre, animationImage)

// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Section-image'
	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim)	
}
function animationImage()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre Img')
	const lesImages = ['../image/groupeAffiche.jpg','../image/Affiche.png','../image/logoTim.png']
	let  monAnimImg = new AnimImg(lesImages, elmContenu)	
}

function finAnim()
{
	console.log('animation terminée')
}










	




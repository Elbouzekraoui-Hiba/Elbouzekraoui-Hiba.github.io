// element du DOM
const divVies=document.querySelector('.vies');//permet de recuperer un element de html 
// on accede au classe avec un point.
const message=document.getElementById('message');
const formulaire=document.getElementById('inputbox');
const input=document.getElementById('number');
const essayerBtn=document.getElementById('essayerBtn');
const rejouer=document.getElementById('rejouer');
const body=document.getElementsByTagName('body')[0];
/*selectionne tt les classe qui appartienne a body, 
renvoie un liste d'element et on vas selectionner 
le premier [0]*/

//modele de coeur:
const coeurvide=' <ion-icon name="heart-outline"></ion-icon>';
const coeurplein='<ion-icon name="heart"></ion-icon>'


//fond
const bgFroid='linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)';
const bgtiede='linear-gradient(to right, #fa709a 0%, #fee140 100%)';
const bgchaud='linear-gradient(to right, #f83600 0%, #f9d423 100%)';
const bgbrullant='linear-gradient(to top, #ff0844 0%, #ffb199 100%)';

const bgwin='linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)';
const bgloose='linear-gradient(to top, #09203f 0%, #537895 100%)';


//la logique play: fct fléché
const play=()=>{
    // genere un nbr aleatoire fct native
    const randomnumber=Math.floor(Math.random()*101);
    //math.floor permet darrondir le chiffre 
    const totalvies=6;
    let vies=totalvies;
    console.log(randomnumber);

    //actualisation à chaque essaie 
    formulaire.addEventListener('submit',(e)=>{
        e.preventDefault();
        const valeurinput=parseInt(input.value);//"3" => 3

        if(valeurinput<0 || valeurinput>100) return;
        //on sort de la boucle et on fait rien


        if (valeurinput===randomnumber){
            body.style.backgroundImage=bgwin;
            message.textContent=`BRAVO!! Le nombre etait bien ${randomnumber}`;
            // les `` permet d'ajouter des variables dans le texte apres un ${var}
            rejouer.style.display="block";
            essayerBtn.setAttribute("disabled","");
        }
        if(valeurinput!==randomnumber){ 
            // on met 3 au lieu de 2 car on as un egalité stricte
            if (randomnumber< valeurinput+3 && randomnumber>valeurinput-3){
                body.style.backgroundImage=bgbrullant;
                message.textContent="C'est brullant!!! 🔥🔥:fire:";
        
            } else if (randomnumber<valeurinput +6 && randomnumber>valeurinput-6){
                body.style.backgroundImage=bgchaud;
                message.textContent="C'est chaud!!! 🔥";
            }else if (randomnumber<valeurinput +11 && randomnumber>valeurinput-11){
                body.style.backgroundImage=bgtiede;
                message.textContent="C'est tiède!!! 😐";
            }else{
                body.style.backgroundImage=bgFroid;
                message.textContent="C'est froid ❄️ ";
            }
            vies--;
            verifyloose();
        }
        actualisecoeurs(vies);
    })
    const verifyloose=()=>{
        if(vies===0){
            body.style.backgroundImage=bgloose;
            body.style.color='#990000';
            essayerBtn.setAttribute("disabled","");
            // desactive le btn essayer et a 2 parametre 1 nom attribut 2 valeur attribut
            message.textContent=`vous avez perdus. le nombre était ${randomnumber}`;
            rejouer.style.display="block"; 
        }
    }
    const actualisecoeurs=(vies)=>{
        divVies.innerHTML="";//on enleve tt le code html dans div
        let tableaudevies=[];
        for(i=0; i<vies;i++) {
            tableaudevies.push(coeurplein);
        }
        for(i=0;i<totalvies - vies;i++){
            tableaudevies.push(coeurvide);
        }
        tableaudevies.forEach(coeur=>{
            divVies.innerHTML+=coeur;
        })
    }
    actualisecoeurs(vies);

    rejouer.addEventListener('click',()=>{
        message.style.display='none';
        document.location.reload(true);
    })
}
play();
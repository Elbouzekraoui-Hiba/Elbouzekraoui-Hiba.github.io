//navbar
let latscrolltop = 0;
navbar=document.getElementById('navbar');

window.addEventListener('scroll',function(){
    const scrolltop=window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrolltop > latscrolltop){
        navbar.style.top="-50px";
    } else{
        navbar.style.top="0";
    }
    latscrolltop=scrolltop;
})

//typed
var typed = new Typed('.typed', {
    strings: ['Bonjour','Bonjour',
    "Je m'appelle EL BOUZEKRAOUI Hiba.","Je suis une étudiante en L3 MIASHS -Mathématoque et informatique appliqué au science humaine et social- à l'univeristé Jean jaurès à Toulouse."],
    typeSpeed: 40,
    backSpeed: 0,

  });


  //AOS
  AOS.init();
    
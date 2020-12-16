var menu = document.querySelector("#desplegable");
var boton = document.querySelector("#menu #boton");
var secciones = document.querySelectorAll("#menu article");
var contenido = document.querySelectorAll(".contenido");
var hero = document.querySelector("#hero");
var body = document.querySelector("body");
var html = document.querySelector("html");
var previas = document.querySelector("#menu");
var seccion = document.querySelectorAll("section");
var container = document.querySelector(".container");
var herosecciones = document.querySelectorAll(".herosecciones");
var menusecciones = document.querySelector(".container>div>article");
var contact = document.querySelector("#contact");
var contactAbrir = document.querySelector("#contactClick");
var contactCerrar = document.querySelector("#contact div:nth-of-type(1)");
var aboutMe = document.querySelector("#aboutme");
var aboutMeAbrir = document.querySelector("#aboutmeClick");
var aboutMeCerrar = document.querySelector("#aboutme div:nth-of-type(1)");
var touchStart;
var touchEnd;

function abrir() {
    menu.classList.toggle("abrirmenu");
    document.querySelector("#boton").classList.toggle("boton2");
    hero.style.height = "0"; 
    hero.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.height = "auto";
}

function seccionesprevias() {
    hero.style.height = "0"; 
    hero.style.overflow = "hidden";
    container.style.height = "100vh"; 
    container.style.width = "100%";
    $("#container section").css("height" , "0vh");
    $("#container section:nth-of-type(1)").css("height" , "100vh");
    previas.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "auto";
    boton.style.display = "none";
    document.querySelector(".container>div:nth-of-type(1)").classList.add("menunavegador");
    document.querySelector(".container>div:nth-of-type(2)").classList.add("informacion");
}

for(let i=0; i<secciones.length; i++){
    secciones[i].onclick = seccionesprevias;
}

boton.onclick = abrir;

for(let i=0; i<secciones.length; i++){
    secciones[i].addEventListener("click",scrollprevias);
}

function scrollprevias(){
    if(hero.style.height == "0px" && previas.style.display == "none"){
        let i = 0;
        window.addEventListener("wheel", moverseccion);
        function moverseccion(){
            window.removeEventListener("wheel", moverseccion);
            let rueda = event.deltaY;
            console.log(i);
            if(rueda>0){
                if(i<(seccion.length-1)){    
                    document.querySelector(".menunavegador div div:nth-of-type(" + (i+1) + ")").style.backgroundColor = "transparent";
                    i++;
                }
            }else{
                if(i>0){
                    document.querySelector(".menunavegador div div:nth-of-type(" + (i+1) + ")").style.backgroundColor = "transparent";
                    i--;
                }
            }
            $("section").css("height" , "0vh");
            seccion[i].style.height = "100vh";
            document.querySelector(".menunavegador div div:nth-of-type(" + (i+1) + ")").style.backgroundColor = "black";
            let seccionActualNumero = document.querySelector(".informacion>div:nth-of-type(2)>p:nth-of-type(1)");
            seccionActualNumero.innerHTML = "0"+(i);
            setTimeout(pausa , 250);
            function pausa(){
                window.addEventListener("wheel", moverseccion);
            }
        }
        document.addEventListener('touchstart', (event) => {
            touchStart = event.changedTouches[0].clientY;
        });
        document.addEventListener('touchend', (event) => {
            touchEnd = event.changedTouches[0].clientY;
            if (touchStart > touchEnd) {
            i++;
            } else {
            i--;
            }
        }); 
    }
}

window.addEventListener("load",scrollhero);
 
function scrollhero(){
    if(hero.style.height != "0px"){
        window.addEventListener("wheel", moverhero);
        let i = 0;
        function moverhero(){
            let rueda = event.deltaY;
            console.log(i);
            if(rueda>0){
                body.scrollIntoView({ behavior: 'smooth', block: 'end'});
            }else{
                
                body.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }
        document.addEventListener('touchstart', (event) => {
            touchStart = event.changedTouches[0].clientY;
        });
        
        document.addEventListener('touchend', (event) => {
            touchEnd = event.changedTouches[0].clientY;
            if (touchStart > touchEnd) {
            i++;
            } else {
            i--;
            }
        }); 
    }
}

menusecciones.onclick = abrirMenuSecciones;

function abrirMenuSecciones(){
    document.querySelector(".menunavegador").classList.toggle("abrir");
    document.querySelector(".menunavegador>article>p").classList.toggle("abrir");
    document.querySelector(".menunavegador>article>hr:nth-of-type(1)").classList.toggle("abrir");
    document.querySelector(".menunavegador>article>hr:nth-of-type(2)").classList.toggle("abrir");
}

contactAbrir.onclick = abrirContact;
contactCerrar.onclick = cerrarContact;

function abrirContact(){
    contact.style.height = "100vh";
    contact.style.width = "100%";
}
function cerrarContact(){
    contact.style.height = "0vh";
}

aboutMeAbrir.onclick = abrirAboutMe;
aboutMeCerrar.onclick = cerrarAboutMe;

function abrirAboutMe(){
    aboutMe.style.height = "100vh";
    aboutMe.style.width = "100%";
}
function cerrarAboutMe(){
    aboutMe.style.height = "0vh";
}
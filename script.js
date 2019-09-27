data = {
    id:5,
    name:"juan"
}

fetch("https://randomuser.me/api/",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
}).then((value) =>{
    return value.json();
}).then((value) => {
    return value.results[0]
}).then((value) => {
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = value.name.title + " " + value.name.first + " " + value.name.last;
})

let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");


let varall = document.querySelector("#hall");
let varphoto = document.querySelector("#hphoto");
let varvideo = document.querySelector("#hvideo");
let varmusic = document.querySelector("#hmusic");
let vardesign = document.querySelector("#hdesign");
/**Prueba de works */

function showall(){
    document.getElementById("photo").style.display = "block";
    document.getElementById("video").style.display = "block";
    document.getElementById("music").style.display = "block";
    document.getElementById("design").style.display = "block";
}
function hidephoto(){
    document.getElementById("photo").style.display = "block";
    document.getElementById("video").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("design").style.display = "none";
}
function hidevideo(){
    document.getElementById("video").style.display = "block";
    document.getElementById("photo").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("design").style.display = "none";
}
function hidemusic(){
    document.getElementById("music").style.display = "block";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("design").style.display = "none";
}
function hidedesign(){
    document.getElementById("design").style.display = "block";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("music").style.display = "none"
}

varall.addEventListener("click",showall);
varphoto.addEventListener("click",hidephoto);
varvideo.addEventListener("click",hidevideo);
varmusic.addEventListener("click",hidemusic);
vardesign.addEventListener("click",hidedesign);
/*Prueba modal */
var modal_1 = document.getElementById("modal1");
var buttom1 = document.getElementById("btn1");
var close_1 = document.getElementsByClassName("close1")[0];

buttom1.onclick = function(){
    modal_1.style.display = "block";
}

function cerrar1(){
    modal_1.style.display = "none";
}
modal_1.addEventListener("click",cerrar1);

var modal_2 = document.getElementById("modal2");
var buttom2 = document.getElementById("btn2");
var close_2 = document.getElementsByClassName("close2")[0];

buttom2.onclick = function(){
    modal_2.style.display = "block";
}

function cerrar2(){
    modal_2.style.display = "none";
}
modal_2.addEventListener("click",cerrar2);

var modal_3 = document.getElementById("modal3");
var buttom3 = document.getElementById("btn3");
var close_3 = document.getElementsByClassName("close3")[0];

buttom3.onclick = function(){
    modal_3.style.display = "block";
}

function cerrar3(){
    modal_3.style.display = "none";
}
modal_3.addEventListener("click",cerrar3);

var modal_4 = document.getElementById("modal4");
var buttom4 = document.getElementById("btn4");
var close_4 = document.getElementsByClassName("close4")[0];

buttom4.onclick = function(){
    modal_4.style.display = "block";
}

function cerrar4(){
    modal_4.style.display = "none";
}
modal_4.addEventListener("click",cerrar4);

var modal_5 = document.getElementById("modal5");
var buttom5 = document.getElementById("btn5");
var close_5 = document.getElementsByClassName("close5")[0];

buttom5.onclick = function(){
    modal_5.style.display = "block";
}

function cerrar5(){
    modal_5.style.display = "none";
}
modal_5.addEventListener("click",cerrar5);

var modal_6 = document.getElementById("modal6");
var buttom6 = document.getElementById("btn6");
var close_6 = document.getElementsByClassName("close6")[0];

buttom6.onclick = function(){
    modal_6.style.display = "block";
}

function cerrar6(){
    modal_6.style.display = "none";
}
modal_6.addEventListener("click",cerrar6);

var modal_7 = document.getElementById("modal7");
var buttom7 = document.getElementById("btn7");
var close_7 = document.getElementsByClassName("close7")[0];

buttom7.onclick = function(){
    modal_7.style.display = "block";
}

function cerrar7(){
    modal_7.style.display = "none";
}
modal_7.addEventListener("click",cerrar7);

var modal_8 = document.getElementById("modal8");
var buttom8 = document.getElementById("btn8");
var close_8 = document.getElementsByClassName("close8")[0];

buttom8.onclick = function(){
    modal_8.style.display = "block";
}

function cerrar8(){
    modal_8.style.display = "none";
}
modal_8.addEventListener("click",cerrar8);
function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });


'use strict';

let open = false;
// document.cookie = "wantsToGoToProva = true";

function goTo(link) {
    window.location = link;
}

function scrollToView(link) {
    alert(wantsToGoToProva);
    window.location = link;
    wantsToGoToProva = true;
    alert(wantsToGoToProva);
}

function dropDown(id){
    if(open == true) {
        document.getElementById(id).classList.remove('mobileBarExtend');
        open = false;
    } else {
        document.getElementById(id).classList.add('mobileBarExtend');
        open = true;
    }
} 

// window.onload = function () {
//     alert(document.cookie);
//     if(document. == true) {
//         alert("Prova is " + wantsToGoToProva);
//         document.getElementById("prova").scrollIntoView();
//         wantsToGoToProva = false;
//     }
// }
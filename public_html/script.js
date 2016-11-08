/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addMenu(idLista,idItem){
    if(document.getElementById(idLista).classList.contains("visible")){
        document.getElementById(idLista).className="vertical-menu__item-container-1 invisible";
        document.getElementById(idItem).className="vertical-menu-container--icono_close";
        
    }else{
        document.getElementById(idLista).className="vertical-menu__item-container-1 visible";
        document.getElementById(idItem).className="vertical-menu-container--icono_open";

    }
}

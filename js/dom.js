/*  dom.js
    Ejercicios Guiados de DOM
    Autor:Juan Manuel Toscano Reyes <jtoscanoreyes@fundacionloyola.net>
    licencia: GPL v3 o superior.
    Año 2021
*/
'use strict'

//DOM-Document Object Model
function ejecutar(){
  //console.log('Funciona');
/*  let iNombre=document.getElementById('iNombre')
  console.log(iNombre.value);*/

  let campos=document.getElementsByTagName('input')
  console.log(campos);

  let campo=document.getElementsByTagName('input')[1]
  console.log(campo.value);

  let p=document.querySelector('.c1')
  console.log(p.innerHTML);
  console.log(p.outerHTML);

  let spans=document.querySelectorAll('.c1 span')
  console.log(spans);

  //document.getElementsByClassName

  //Modificación del DOM
  spans[1].innerHTML='¡Viva la Pepa!'

  //Modificar atributos de estilo
  spans[0].style.color='blue'
  spans[0].style.fontSize='20pt'

  //Parrafo que se desplaze de izqu a derecha
  setInterval(desplazar,100)




}
let posicion=0
function desplazar(){
  let desplazar=document.getElementById('desplazar')
  desplazar.style.left=`${posicion}px`
  posicion +=10
  /*if (desplazar.style.left<1000) {
    posicion +=10
  }else{
    posicion -=10
  }*/
}
function construir(){
  //console.log('Construir');
  let div = document.getElementsByClassName('borde')[0]
  //console.log(div);
  //div.innerHTML='<p>Este es un texto <span>en negrita</span>.</p>'
  let p=document.createElement('p')
  div.appendChild(p)
  let nodoTexto=document.createTextNode('Este es un texto...')
  p.appendChild(nodoTexto)
  let span=document.createElement('span')
  p.appendChild(span)
  span.classList.add('negrita')
  span.classList.add('borde')
  span.appendChild(document.createTextNode('en negrita'))
  let img=document.createElement('img')
  div.insertBefore(img,p)
  //document.body.appendChild(img)
  img.setAttribute('src','img/cacatua.jpeg')
}

function destruir(){
  let p=document.querySelector('.borde p')
  p=document.getElementsByClassName('borde')[0].getElementsByTagName('p')[0]
  //console.log(p.innerHTML);
  p.remove()
}

function destruirTodo(){
  let div= document.getElementsByClassName('borde')[0]
  while (div.firstElementChild) {
    div.removeChild(div.firstElementChild)
  }
}

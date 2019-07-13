//MENU STICKY
const header = document.getElementsByTagName('header');
const alturaHeader = header[0].clientHeight;
if (window.innerWidth > 991) {
  setHeader();
  window.addEventListener('scroll', setHeader);
  function setHeader() {
    var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollTop > alturaHeader && scrollTop < (alturaHeader + 50)) {
      header[0].classList.add('oculto');
      header[0].classList.remove('sticky');
      header[0].classList.remove('default');
    }
    else if((scrollTop >= (alturaHeader + 50)) && scrollTop < 400){
      header[0].classList.add('sticky');
      header[0].classList.add('oculto');
      header[0].classList.remove('visible');
    }
    else if(scrollTop >= 400){
      header[0].classList.add('visible');
      header[0].classList.add('sticky');
      header[0].classList.remove('oculto');
      header[0].classList.remove('default');
    }
    else{
      header[0].classList.remove('sticky');
      header[0].classList.remove('visible');
      header[0].classList.remove('oculto');
      header[0].classList.add('default');
    }
  }
}


//Boton Menu Mobile
const btnMenu = document.getElementById('btn-menu');
const navHead = document.getElementById('navHead');

if(btnMenu){
  btnMenu.addEventListener("click", function(){
    if(btnMenu.classList.contains('open')){
      btnMenu.classList.remove('open');
      btnMenu.classList.add('close');
      navHead.classList.remove('visible');
    }else{
      btnMenu.classList.remove('close');
      btnMenu.classList.add('open');
      navHead.classList.add('visible');
    }
  });
}

//Tabs
const menuTabs = document.getElementById('menu-tabs');
if(menuTabs){
const itemsTab = menuTabs.getElementsByTagName('a');

const itemsPanel = document.getElementsByClassName('item-panel');
const conTabs = document.getElementsByClassName('con-tabs');

for(var i = 0; i < itemsTab.length; i++) {
  itemsTab[i].addEventListener('click', function(e){
    var self = this;
    e.preventDefault();
    const idPanel = this.dataset.rel;

    for(var j = 0; j < itemsPanel.length; j++) {
      itemsPanel[j].style.display = 'none';
    }
    document.getElementById(idPanel).style.display = 'block';
    conTabs[0].style.height = 'auto';
    for(var k = 0; k < itemsTab.length; k++) {
      itemsTab[k].classList.remove('activo');
      self.classList.add('activo');
    }
  });
}
}

function scrollToSmoothly(pos, time){
/*Time is only applicable for scrolling upwards*/
/*Code written by hev1*/
/*pos is the y-position to scroll to (in pixels)*/
time = 10;
     if(isNaN(pos)){
      throw "Position must be a number";
     }
     if(pos<0){
     throw "Position can not be negative";
     }
    var currentPos = window.scrollY||window.screenTop;
    if(currentPos<pos){
    if(time){
    	var x;
      var i = currentPos;
      x = setInterval(function(){
         window.scrollTo(0, i);
         i += 10;
         if(i>=pos){
          clearInterval(x);
         }
     }, time);
    } else {
    var t = 10;
       for(let i = currentPos; i <= pos; i+=10){
       t+=10;
        setTimeout(function(){
      	window.scrollTo(0, i);
        }, t/2);
      }
      }
    } else {
    time = time || 2;
       var i = currentPos;
       var x;
      x = setInterval(function(){
         window.scrollTo(0, i);
         i -= 10;
         if(i<=pos){
          clearInterval(x);
         }
     }, time);
      }
}
function scrollToDiv(){
  var elem = document.getElementById('noticias');
  scrollToSmoothly(elem.offsetTop - 50);
}

const cSlide = document.getElementsByClassName('carrusel-slide');
if(cSlide){
[].forEach.call(document.querySelectorAll('.carrusel-slide'), function (el) {
  var slider = tns({
    container: el,
    items: 1,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    preventScrollOnTouch: "force"
    });
  });
}

const carrusel4 = document.getElementsByClassName('carrusel-4');
if(carrusel4){
[].forEach.call(document.querySelectorAll('.carrusel-4'), function (el) {
  var slider = tns({
      container: el,
      items: 4,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      gutter: 15,
      preventScrollOnTouch: "force",
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 2
          },
          991: {
            items: 4
          }
      }
    });
  });
}
//Acordeon
const acc = document.getElementsByClassName('accordion');
if(acc){
  for (let i = 0; i < acc.length; i++) {
      let item = acc[i];
      var accordion = new Accordion({
          element: item,
          oneOpen: true
      });
  }
}
/*--LAZY--*/
lazyload();

/*--WOW--*/
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile: false,
        callback:     function(box) {
        }
      }
    );
    wow.init();
/*--FIN WOW--*/

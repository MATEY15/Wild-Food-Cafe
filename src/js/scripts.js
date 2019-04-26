//= jquery.min.js
//= jquery.magnific-popup.min.js
//= PageScroll2id.min.js
//= owl.carousel.min.js

// window.onload = function(){
//   // $("body").toggleClass('opacity');
//   $("#overlayer").delay(1000).fadeOut("slow");
//   overlay.toggle();
//   setTimeout(function() {
//     overlay.toggle();
//   }, 800);
// }

$(".burger-menu").on("click", function() {  
  $(this).toggleClass('is-active');
  $(".top-line").toggleClass('is-active');
  $(".menu-header").toggleClass('is-active');
  $("body").toggleClass('overflow');
})

function heightFooter(){
  var heightFoot = $('.section--footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

$(".scroll-section").mPageScroll2id();

$('.slider-events').owlCarousel({
	loop: false,
	margin: 40,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		721:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$('.recipes-slide').owlCarousel({
	loop: false,
	margin: 40,
	nav:true,
	responsive:{
		0:{
			items: 1
		},
		560:{
			items:2
		},
		855:{
			items:3,
			margin: 30
		},
		1025:{
			items:4,
			margin: 40
		}
	}
});
$('.slide-product').owlCarousel({
	loop: true,
	margin: 10,
	nav:false,
	items: 1
});

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
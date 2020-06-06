
const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 1,
    nav: false,
    controls: false,
    animateDelay: 300
});


document.querySelector('.reviews-prev').onclick = function () {
  var info = slider.getInfo(),
  indexPrev = info.indexCached + 1,
  indexCurrent = info.index;

  info.slideItems[indexPrev].classList.toggle('slider__item_passive');
  info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
  console.log(info.slideItems[indexPrev]);
  console.log(info.slideItems[indexCurrent]);
  slider.goTo('prev');
  if(info.slideItems[indexCurrent].classList.contains('slider__item_passive')) {
    info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
  }
  if(!info.slideItems[indexCurrent - 1].classList.contains('slider__item_passive')){
    info.slideItems[indexCurrent - 1].classList.toggle('slider__item_passive');
  }
};
document.querySelector('.reviews-next').onclick = function () {
  var info = slider.getInfo(),
  indexPrev = info.indexCached + 1,
  indexCurrent = info.index + 2;

  info.slideItems[indexPrev].classList.toggle('slider__item_passive');
  info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
  console.log(info.slideItems[indexPrev]);
  console.log(info.slideItems[indexCurrent]);
  slider.goTo('next');
  if(info.slideItems[indexCurrent].classList.contains('slider__item_passive')) {
    info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
  }
  if(!info.slideItems[indexCurrent + 1].classList.contains('slider__item_passive')){
    info.slideItems[indexCurrent + 1].classList.toggle('slider__item_passive');
  }
};
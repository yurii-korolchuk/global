
const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 1,
    nav: false,
    controls: false

});

document.querySelector('.reviews-prev').onclick = function () {
    var info = slider.getInfo(),
      indexCurrent = info.index + 1;
      info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
    slider.goTo('prev');
    var info2 = slider.getInfo(),
      indexCurrent2 = info2.index + 1;
    info.slideItems[indexCurrent2].classList.toggle('slider__item_passive');
};
document.querySelector('.reviews-next').onclick = function () {
    var info = slider.getInfo(),
      indexCurrent = info.index + 1;
      info.slideItems[indexCurrent].classList.toggle('slider__item_passive');
    slider.goTo('next');
    var info2 = slider.getInfo(),
      indexCurrent2 = info2.index + 1;
    info.slideItems[indexCurrent2].classList.toggle('slider__item_passive');
};
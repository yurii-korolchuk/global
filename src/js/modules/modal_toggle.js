function modalOpen(modalWindowSelector) {
    document.querySelector(modalWindowSelector).style.display = "block";
    document.body.style.overflow = 'hidden';
}

const modalClose = function(modalWindowSelector) {
    document.querySelector(modalWindowSelector).style.display = "none";
    document.body.style.overflow = 'auto';
};

export {modalOpen, modalClose};
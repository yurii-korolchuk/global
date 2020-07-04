function getFormInfo(inputsSelector, formName) {
    document.querySelectorAll(inputsSelector).forEach(item => {
        if(formName) {
            const tmp = localStorage.getItem(`${formName}${item.getAttribute('name').charAt(0).toUpperCase() + 
            item.getAttribute('name').slice(1)}`);
            if(tmp) {
                item.value = tmp;
            }
        } else {
            const tmp = localStorage.getItem(`${item.getAttribute('name').charAt(0).toUpperCase() + item.getAttribute('name').slice(1)}`);
            if(tmp) {
                item.value = tmp;
            }
        }
    });
}

export default getFormInfo;
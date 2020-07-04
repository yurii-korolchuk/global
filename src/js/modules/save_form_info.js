function saveFormInfo(inputsSelector, formName) {
    document.querySelectorAll(inputsSelector).forEach(item => {
        item.addEventListener('input', () => {
            if(item.value) {
                if(formName) {
                    localStorage.setItem(`${formName}${item.getAttribute('name').charAt(0).toUpperCase() + 
                    item.getAttribute('name').slice(1)}`, item.value);
                } else {
                    localStorage.setItem(`${item.getAttribute('name').charAt(0).toUpperCase() + 
                    item.getAttribute('name').slice(1)}`, item.value);
                }
            }
        });
    });
}

export default saveFormInfo;
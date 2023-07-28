const formRefs = {
    openFormBtn: document.querySelector('.hero__button'),
    closeFormBtn: document.querySelector('.close__button'),
    form: document.querySelector('.wrapper'),
};

formRefs.openFormBtn.addEventListener('click', toggleForm);
formRefs.closeFormBtn.addEventListener('click', toggleForm);

function toggleForm() {
    formRefs.form.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');  
}

formRefs.form.onclick = function(event) {
    let target = event.target.closest('div');

    if (!target.classList.contains('wrapper')) return;

    toggleForm();
} 
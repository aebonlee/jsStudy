//var
const licenseOpenBtn = document.getElementById('licenseModalOpen');
const licenseCloseBtn = document.getElementById('licenseModalClose');
const licenseShow = document.getElementById('licenseModalShow');

const careerOpenBtn = document.getElementById('careerModalOpen');
const careerCloseBtn = document.getElementById('careerModalClose');
const careerShow = document.getElementById('careerModalShow');

const SHOWING_CLASS = 'show';

//function
function licenseModalOpen(){
    licenseShow.classList.add(SHOWING_CLASS);
}

function licenseModalClose(){
    licenseShow.classList.remove(SHOWING_CLASS);
}

function careerModalOpen(){
    careerShow.classList.add(SHOWING_CLASS);
}

function careerModalClose(){
    careerShow.classList.remove(SHOWING_CLASS);
}

function init() {
    licenseOpenBtn.addEventListener('click', licenseModalOpen);
    licenseCloseBtn.addEventListener('click', licenseModalClose);
    licenseShow.addEventListener('click', licenseModalClose);

    careerOpenBtn.addEventListener('click', careerModalOpen);
    careerCloseBtn.addEventListener('click', careerModalClose);
    careerShow.addEventListener('click', careerModalClose);
}

init();

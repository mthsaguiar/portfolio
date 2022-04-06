
const elementVariables = {
    openCloseBtn: document.getElementById('close-open-btn'),
    mobileNav: document.querySelector('#menu-navigation'),
    html: document.querySelector('html'),
    sections: document.querySelectorAll('section')
}

function closeMenuNav(){
    elementVariables.mobileNav.classList.remove('active');
    elementVariables.openCloseBtn.setAttribute('aria-label','Close Menu');
    elementVariables.html.style.overflow = 'visible';
    eventDestroyerSet('click', elementVariables.sections, closeMenuNav)
}

function openMenuNav(){
    elementVariables.mobileNav.classList.add('active');
    elementVariables.openCloseBtn.setAttribute('aria-label','Open Menu');
    elementVariables.html.style.overflow = 'hidden';
    eventCreatorSet('click', elementVariables.sections, closeMenuNav)
}

function openCloseMenuNavToggle(){
    if(elementVariables.mobileNav.classList.contains('active'))
        closeMenuNav();
    else
        openMenuNav();
}

function eventCreatorSingle(event, element, eventFunction){
    element.addEventListener(event, eventFunction)
}

function eventDestroyerSingle(event, element, eventFunction){
    element.removeEventListener(event, eventFunction)
}

function eventCreatorSet(event, elements, eventFunction){
    if(NodeList.prototype.isPrototypeOf(elements)){
        elements.forEach( element => {
            element.addEventListener(event, eventFunction);
        } );
    }
}

function eventDestroyerSet(event, elements, eventFunction){
    if(NodeList.prototype.isPrototypeOf(elements)){
        elements.forEach( element => {
            element.removeEventListener(event,eventFunction);
        } );
    }
}


eventCreatorSingle('click', elementVariables.openCloseBtn, openCloseMenuNavToggle);

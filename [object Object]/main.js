document.addEventListener("DOMContentLoaded", function(){
    const buttons =  document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');

    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            handleVisibility()
        } else{
            handleVisibilityShow()
        }
    })

function handleVisibility(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function handleVisibilityShow(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//Abas
    for(let i = 0 ; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            handleTabs()
            tab.classList.add('shows__list--active')
            handleButtons()
            botao.target.classList.add('shows__tabs__button--active')
            
        })
    }
// accordion para perguntas
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', handleToggleAnswer)
    }
})

function handleToggleAnswer(element){
    const elementClass = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(elementClass) 
}

function handleButtons(){
    const buttons =  document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');

    }
}

function handleTabs(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabContainer.length; i++){
        tabContainer[i].classList.remove('shows__list--active');
        console.log('rodou')
    }
}
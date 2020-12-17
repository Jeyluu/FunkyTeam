//Menu burger

const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
navBar.classList.toggle('change');
})


//bruit bouton

function playSound() {
son.play()
};




//application



/* Quand je rentre le nom d'un champion alors le role apparait dans la division role */
function eloImg(){
    var userPts = document.getElementById('champion-box').value;
    
    if(userPts < 20){
        
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes bronze</h1><br><img src=./ressources/base-icons/bronze.png>";
    } else if (userPts < 40){

        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Silver</h1><br><img src=./ressources/base-icons/silver.png>"

    } else if (userPts < 60){
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Gold</h1><br><img src=./ressources/base-icons/gold.png>"
    } else if (userPts < 80){
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Platine</h1><br><img src=./ressources/base-icons/platinum.png>"
    } else if (userPts < 100){
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Diamant</h1><br><img src=./ressources/base-icons/diamond.png>"
    } else if (userPts < 150){
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Master</h1><br><img src=./ressources/base-icons/master.png>"
    } else {
        document.getElementById('votreElo').innerHTML = "<h1>Vous êtes Challenger</h1><br><img src=./ressources/base-icons/challenger.png>"
    }
    

}

//effet sur les carrou-body Intersection Observer MDN
const ratio = .4
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio) {

            entry.target.classList.add('carrou-body-visible')
            
            observer.unobserve(entry.target)
        } else {
            
        }
        
    })

}

const observer = new IntersectionObserver (handleIntersect, options)
document.querySelectorAll('.carrou-body').forEach(function (carrou){
    observer.observe(carrou)
})


//fenetre modale
let modal = null
const focusableSelector = 'button, a, textarea'
let focusables = []

const openModal = function (e) {
    e.preventDefault()

    modal = document.querySelector(e.target.getAttribute('href'))
    focusables = Array.from(modal.querySelectorAll(focusableSelector))
    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-model','true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.btn').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = function(e) {
    if(modal === null)return
    e.preventDefault()
    window.setTimeout(function () {
        modal.style.display = 'none'
        modal = null
    },100)
    
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-model')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.btn').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    
}

const stopPropagation = function(e) {
    e.stopPropagation()
}

const focusInModal = function (e) {
    e.preventDefault()
    let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
    index++
    if(index >= focusables.lenght) {
        index = 0
    }
    focusables[index].focus()
    
}


document.querySelectorAll('.js-modal').forEach(a =>{
    a.addEventListener('click', openModal)
    
})

window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' || e.key ==='Esc') {
        closeModal(e)
    }
    if(e.key === 'tab' &&  modal !== null) {
        focusInModal(e)
    }
})

var dmgChamp = [
    {
        name: 'ashe',
        poste: 'Poste : Adc',
        type: ' Type : Archer',
        dégat: 'Dégat de base: ' + 500,

    },
    {
        name: 'maitre yi',
        poste: 'Poste : Jungle',
        type: ' Type: Combattant',
        dégat: 'Dégat de base: ' + 350,

    },
    {
        name: 'fiora',
        poste: 'Poste : Haut',
        type: ' Type: Combattant',
        dégat: 'Dégat de base: ' + 500,

    },
    {
        name: 'katarina',
        poste: 'Poste : Milieu',
        type: ' Type: Assassin / Mage',
        dégat: 'Dégat de base: ' + 500,

    },
    {
        name: 'zed',
        poste: 'Poste : Milieu',
        type: ' Type: Assassin',
        dégat: 'Dégat de base: ' + 800,

    },
];


function info () {


let champion = document.getElementById('user').value
let result = document.getElementById('result')
let skin = document.getElementById('skins')
if( champion === 'ashe'){
    result = document.getElementById('result').innerHTML = dmgChamp[0].poste + '<br>' + dmgChamp[0].type + '<br>' + dmgChamp[0].dégat
    skin.innerHTML = '<img src=./ressources/images/skinashe.jpg>'
} else if ( champion === 'maitre yi') {
    result = document.getElementById('result').innerHTML = dmgChamp[1].poste + '<br>' + dmgChamp[1].type + '<br>' + dmgChamp[1].dégat
    skin.innerHTML = '<img src=./ressources/images/yi1.jpg>'
} else if ( champion === 'fiora') {
    result = document.getElementById('result').innerHTML = dmgChamp[2].poste + '<br>' + dmgChamp[2].type + '<br>' + dmgChamp[2].dégat
    skin.innerHTML = '<img src=./ressources/images/Fiora.jpg>'
}else if ( champion === 'katarina') {
    result = document.getElementById('result').innerHTML = dmgChamp[3].poste + '<br>' + dmgChamp[3].type + '<br>' + dmgChamp[3].dégat
    skin.innerHTML = '<img src=./ressources/images/Katarina.jpg>'
} else if ( champion === 'zed') {
    result = document.getElementById('result').innerHTML = dmgChamp[4].poste + '<br>' + dmgChamp[4].type + '<br>' + dmgChamp[4].dégat
    skin.innerHTML = '<img src=./ressources/images/zed.jpg>'
} 
else {
    result = document.getElementById('result').innerHTML = 'Pas encore dans la base de donnée'
}}
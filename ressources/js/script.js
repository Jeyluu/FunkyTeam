//Menu burger

const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
navBar.classList.toggle('change');
})


//bruit bouton

function playSound() {
son.play()
}




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





    




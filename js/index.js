

const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener('mouseover', ()=>{
        var cardBg = card.querySelector('.card-bg');
        cardBg.classList.add('card-bg-hover');
        var content = card.querySelector('.card-content');
        content.style.display = 'flex';
    })
    card.addEventListener('mouseout', ()=>{
        var cardBg = card.querySelector('.card-bg');
        cardBg.classList.remove('card-bg-hover');
        var content = card.querySelector('.card-content');
        content.style.display = 'none';
    })
})

const leftScroll = document.querySelector('.left-scroll');
const rightScroll = document.querySelector('.right-scroll');

var leftmostCard = 0;
var rightmostCard = 1;

console.log("Screen Width::",screen.width);
if (screen.width < 960){
    rightmostCard = 0;
}

console.log("Leftmost card::",leftmostCard);
console.log("Rightmost card::",rightmostCard);

leftScroll.addEventListener('click',()=>{
    leftmostCard--;
    rightmostCard--;
    if (leftmostCard==0){
        leftScroll.disabled = true;
    }
    else{
        leftScroll.disabled = false;
    }
    rightScroll.disabled = false;
    changeCards();
    
})

rightScroll.addEventListener('click',()=>{
    leftmostCard++;
    rightmostCard++;
    if (rightmostCard==(cards.length-1)){
        rightScroll.disabled = true;
    }
    else{
        rightScroll.disabled = false;
    }
    leftScroll.disabled = false;
    changeCards();
    
})

function changeCards(){
    for(var i=0; i<cards.length;i++){
        if ((i<leftmostCard)||(i>rightmostCard)){
            cards[i].style.display = 'none';
        }
        if ((i>=leftmostCard)&&(i<=rightmostCard)){
            cards[i].style.display = 'flex';
        }
    }
}

/*************** Adding Background Images to card-bg with javascript *************/

const backgrounds = ['masaiMara.png','MoxyBrooklyn.png','ReggisKanai.png','RitzCarlton.png','TampaEdition.png'];

const mobEffectBeg = "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.7)), url('./assets/";
const test = "url('./assets/";
const effectEnd = "')"

const desktopEffectBeg = "url('./assets/";
var str = '';

var cardBg = document.querySelectorAll('.card-bg');

cardBg.forEach((card, idx)=>{
    if (screen.width<960){
        str =  mobEffectBeg + backgrounds[idx] + effectEnd;
        card.style.backgroundImage = str;
        console.log(str);
    }
    else{
        str = desktopEffectBeg +backgrounds[idx] + effectEnd;
        card.style.backgroundImage = str;
    }
    
})
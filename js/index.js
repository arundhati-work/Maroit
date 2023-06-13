

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
var rightmostCard = 2;

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
    if (rightmostCard==4){
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


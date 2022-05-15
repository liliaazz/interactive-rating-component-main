let allRatings = [rating1 , rating2, rating3, rating4, rating5];
let msg = document.querySelector('span');

document.querySelectorAll("input").forEach((btn, i) => {
    btn.addEventListener('click', allRatings[i])
});
 

function rating1(){
    msg.textContent = 1;
}

function rating2(){
    msg.textContent = 2;
}
  
function rating3(){
    msg.textContent = 3;
}

function rating4(){
    msg.textContent = 4;
}

function rating5(){
    msg.textContent = 5;
}


function submit(){
    let ThankYouState = document.getElementById('ThankYouState');
    let ratingState = document.getElementById('ratingState');
    ratingState.style.display = "none";
    ThankYouState.style.display = "block";
}




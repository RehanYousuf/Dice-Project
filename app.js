var element = document.querySelectorAll("img")[0];
function flipdice(userpick){
    var ranNum = Math.ceil(Math.random()*6);

    var pElement = document.getElementById("para");

    if(ranNum === 1){
        element.src="./img/1.png"
    }
    else if(ranNum === 2){
        element.src="./img/2.png"
    }
    else if(ranNum === 3){
        element.src="./img/3.png"
    }
    else if(ranNum === 4){
        element.src="./img/4.png"
    }
    else if(ranNum === 5){
        element.src="./img/5.png"
    }
    else if(ranNum === 6){
        element.src="./img/6.png"
    }
    if((userpick === "ONE" && ranNum === 1)||
    (userpick === "TWO" && ranNum === 2)||
    (userpick === "THREE" && ranNum === 3)||
    (userpick === "FOUR" && ranNum === 4)||
    (userpick === "FIVE" && ranNum === 5)||
    (userpick === "SIX" && ranNum === 6)){
        // console.log('you won the toss')
        pElement.innerHTML = " You Won"
    }
  else{
//   console.log('you loss the toss');
pElement.innerHTML = " You Loss"
  }



}
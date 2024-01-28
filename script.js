let rollbtn=document.getElementById("btn");

let dice=document.getElementById("dice-img");

rollbtn.addEventListener("click",()=>{
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");   
        rolldice();
    }, 1000);
    })

function rolldice(){
    let diceresult=Math.floor(Math.random()* 6)+1;
    let diceface=dicedisplay(diceresult);
    dice.innerHTML=diceface;
}

function dicedisplay(diceresult){
    switch(diceresult){
        case 1:{
            return"&#9856;";
        }
        case 2:{
            return"&#9857;";
        }
        case 3:{
            return"&#9858;";
        }
        case 4:{
            return"&#9859;";
        }
        case 5:{
            return"&#9860;";
        }
        case 6:{
            return"&#9861;";
        }
        default :{
            return"";
        }
    }
}

let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newgameBtn=document.querySelector("#NewGame-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#winner-msg")
let container=document.querySelector(".container")
let resetbtnContainer=document.querySelector(".resetbtn-container")
let plaeyr0=true


const winningComb=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        // box.innerText='0'
        
        if(plaeyr0){
            box.innerText="O"
            plaeyr0=false
        }
        else{
            box.innerText="X"
            plaeyr0=true
        }
        box.disabled=true;
        checkWinner();
       

    })
});
const disableBoxes=()=>{
    for (box of boxes){
        box.disabled=true
    }
}

const enableBoxes=()=>{
    for (box of boxes){
        box.disabled=false        
    }
}

const showWinner=(position)=>{
    msg.innerText=`Congo! The Winner is  ${position}`
    msgContainer.classList.remove('hide')
    resetbtnContainer.classList.add("hide3")

}


const checkWinner=()=>{
    for(comb of winningComb){
        // console.log(comb)
        // console.log(comb[0],comb[1],comb[2],)
        // console.log(boxes[comb[0]].innerText,boxes[comb[1]].innerText,boxes[comb[2]].innerText,)

        let position1=boxes[comb[0]].innerText;
        let position2=boxes[comb[1]].innerText;
        let position3=boxes[comb[2]].innerText;
        if (position1!="" && position2!="" && position3!=""){
            if (position1===position2 && position2===position3){
                console.log("winner",position1);
                disableBoxes();
                showWinner(position1);
                container.classList.add("hide2")

            }
        }
        
      
        
   

        

    }
}

resetBtn.addEventListener("click",()=>{
    console.log("reset")
    for(box of boxes){
        box.innerText=""
    }
    enableBoxes();
})

newgameBtn.addEventListener("click",()=>{
    console.log("New Game")
    container.classList.remove("hide2")
    msgContainer.classList.add('hide')
    for(box of boxes){
        box.innerText=""

    }    
    resetbtnContainer.classList.remove('hide3')
    enableBoxes();   
    
})



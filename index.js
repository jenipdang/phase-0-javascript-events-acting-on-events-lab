// Your code here

const dodger = document.getElementById("dodger")

//moving Dodger to the left 
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
// this stop Dodger from goind off the edge of the left 
    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

//when keydown with key "Arrowleft" Dodger will be move to the left
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})

//moving Dodger to the right 
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
//from where Dodger
    if(left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight()
    }
})
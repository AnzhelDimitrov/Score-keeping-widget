const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#resetBtn');
const maxScoreDropDown = document.querySelector('#maxScore');

let p1Score = 0;
let p2Score = 0;
let maxScore = 5;

maxScoreDropDown.addEventListener('change', () =>{
    maxScore = Number(maxScoreDropDown.value);
    resetGame();
})

p1Btn.addEventListener('click', () =>{
    p1Score += 1;
    p1Display.textContent = p1Score;
    if(p1Score === maxScore){
        disableBtn();
        p1Display.style.color = 'green';
        p2Display.style.color = 'red';
    }
})
p2Btn.addEventListener('click', () =>{
    p2Score += 1;
    p2Display.textContent = p2Score;
    if(p2Score === maxScore){
        disableBtn();
        p2Display.style.color = 'green';
        p1Display.style.color = 'red';
    }
})

resetBtn.addEventListener('click', () =>{
    resetGame();
})


const disableBtn = () => {
    p1Btn.disabled = true;
    p2Btn.disabled = true;
}

const resetGame = () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
}

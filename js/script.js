const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
typingInput = document.querySelector(".typing-input");

function randomWord(){
    let randomObj = wordList[Math.floor(Math.random() * wordList.length)]; //get random object
    let word = randomObj.word; //get word of random object
    console.log(word);
    hint.innerText=randomObj.hint;
    let html ="";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
    randomWord()
function initGame(e){
    let key = e.target.value;
    console.log(key);
}



    resetBtn.addEventListener("click", randomWord);
    typingInput.addEventListener("input", initGame );
    document.addEventListener("keydown", ()=> typingInput.focus());

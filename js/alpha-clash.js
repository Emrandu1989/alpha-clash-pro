/* function play(){
// step-1: hide the home screen. to hide the screen add the class hidden to the home section.


const homeSection = document.getElementById('home-screen');
homeSection.classList.add('hidden')
// console.log(homeSection.classList)
  const playGroundSection = document.getElementById("play-ground");
  console.log(playGroundSection.classList)
  playGroundSection.classList.remove('hidden')

// Show the Playground


} */

function handleKeyboardButtonPress(){
    console.log('button pressed')
}

// capture keyboard key press

document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
// step-1: generate a random alphabet;
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet",alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color

    setBackgroundColorById(alphabet)


}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground');
    continueGame()
}
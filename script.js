console.log("Hello World.");

// const navbar = document.querySelector('.navbar');
// let top = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top) {    
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');    
//   }
// }
// window.addEventListener('scroll', stickynavbar);

const text = ["Full Stack Web Developer", "JavaScript Developer", "Chikni Chudail"]
let wordIndex = 0;
let charIndex = 0;
let char = document.getElementById("typeWrite");

function typeWord(){
  let currentWord = text[wordIndex];
  if(charIndex<currentWord.length){
    char.textContent += currentWord[charIndex];
    charIndex++;
    setTimeout(typeWord, 75);
  }else{
    setTimeout(deleteWord, 800);
  }
}

function deleteWord(){
  let currentWord = text[wordIndex];
  if(charIndex>0){
    char.textContent = currentWord.substring(0, charIndex-1);
    charIndex--;
    setTimeout(deleteWord, 35);
  }else{
    wordIndex = (wordIndex+1)%text.length;
    setTimeout(typeWord, 100);
  }
}


typeWord();

let header = document.getElementById("nav");
let moon = document.getElementById("toggle");

let darkMode = ()=>{
  nav.classList.add("darkNav");
}

let whiteMode = ()=>{
  nav.classList.remove("darkNav");
}

let count = 1;
moon.addEventListener("click", () => {
  // console.log("Clicked");
  // darkMode();

  if(count%2 != 0){
    darkMode();
    count ++;
  }else{
    count --;
    whiteMode();
  }
});












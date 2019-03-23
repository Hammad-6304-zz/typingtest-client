import shuffle from './shuffle'
export default function start (tar,wordList) {
   
    let wordSection = tar
    wordSection.innerHTML = "";
    for (let i = 200; i > 0; i--) {
      let words = shuffle(wordList);
      let wordSpan = `<span>${words[i]}</span>`;
      wordSection.innerHTML += wordSpan;
    }
    wordSection.firstChild.classList.add("current-word");
  };
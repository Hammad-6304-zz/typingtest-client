import shuffle from './shuffle'
export default function start (tar,wordList) {
    //     console.log(this.sibling)
    //    this.sibling.nextSibling.classList.add("hello")
    //     console.log(this.sibling.nextSibling)
    //     let current = document.getElementsByClassName("hello")[0]
    //     console.log("current node",current);
    //     console.log(current.nextSibling)

    // clear existing word-section
    let wordSection = tar
    wordSection.innerHTML = "";
    let len = wordList.length;
    for (let i = 200; i > 0; i--) {
      let words = shuffle(wordList);
      let wordSpan = `<span>${words[i]}</span>`;
      wordSection.innerHTML += wordSpan;
    }
    // mark first word as current-word
    wordSection.firstChild.classList.add("current-word");
    console.log(wordSection.firstChild);

    // mark last word with magic-box
    // let magicBox = document.createElement("DIV");
    // magicBox.classList.add("magic-box");
    // wordSection.appendChild(magicBox);
  };
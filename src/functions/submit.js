import checkWord from "./checkword";
export default function submitWord(word, wordData) {
  let current = document.getElementsByClassName("current-word")[0];

  if (checkWord(word)) {
    current.classList.remove("current-word");
    current.classList.add("correct-word-c");
    wordData.correct += 1;
  } else {
    current.classList.remove("current-word", "incorrect-word-bg");
    current.classList.add("incorrect-word-c");
    wordData.incorrect += 1;
  }
  wordData.total = wordData.correct + wordData.incorrect;

  current.nextSibling.classList.add("current-word");
}

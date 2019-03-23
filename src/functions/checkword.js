export default function checkWord(word) {
    let wlen = word.value.length;
    let current = document.getElementsByClassName("current-word")[0];
    let currentSubstring = current.innerHTML.substring(0, wlen);
    if (word.value.trim() !== currentSubstring) {
        current.classList.add("incorrect-word-bg");
        return false;
    } else {
        current.classList.remove("incorrect-word-bg");
        return true;
    }
}
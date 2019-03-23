
export default function calculateWPM(data, targetresult, sub, input, target) {
  let { seconds, correct, incorrect, total, typed } = data;
  let min = seconds / 60;
  let wpm = Math.ceil(typed / 5 - incorrect / min);
  let accuracy = Math.ceil((correct / total) * 100);

  if (wpm < 0) {
    wpm = 0;
  } // prevent negative wpm from incorrect words

  // template strings are pretty cool

  let data1 = {
    wpm: wpm,
    accuracy: accuracy,
    total: total,
    correctWord: correct,
    incorrectWord: incorrect,
    typed: typed,
    dim: true,
    disp: "none"
  };

  input.value = "";
  sub(data1);
  target.innerHTML = "<h1 >Finished test</h1>";
}

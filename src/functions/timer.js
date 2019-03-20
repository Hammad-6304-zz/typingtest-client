export default function isTimer(seconds,timertarget,settime) {
    // BUG: page refresh with keyboard triggers onkeyup and starts timer
    // Use restart button to reset timer
    console.log("time",time)
    let time = seconds;
    // only set timer once
    let one = timertarget;
    console.log("hamm",timertarget)
    if (one == "1:00") {
        let typingTimer = setInterval(() => {
            if (time <= 0) {
                console.log("hello if block")
                clearInterval(typingTimer);
            } else {
                console.log("hello elseboli")
                time -= 1;
                let timePad = (time < 10) ? ("0" + time) : time; // zero padded
                let ready = `0:${timePad}`;
                settime(ready)
                // timertarget = "hammad"
                // one = time;
                // console.log("one console",one)
            }
        }, 1000);
    } else if (one == "0:00") {return false;}
    return true;
}
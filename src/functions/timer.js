export default function isTimer(seconds,timertarget,settime) {
  
    let time = seconds;
    let one = timertarget;
    if (one === "1:00") {
        let typingTimer = setInterval(() => {
            if (time <= 0) {
                clearInterval(typingTimer);
            } else {
                time -= 1;
                let timePad = (time < 10) ? ("0" + time) : time; 
                let ready = `0:${timePad}`;
                settime(ready)
            }
        }, 1000);
    } else if (one === "0:00") {return false;}
    return true;
}
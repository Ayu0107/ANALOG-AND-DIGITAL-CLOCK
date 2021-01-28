setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;    
    secondHand.style.transform = `rotate(${srotation}deg)`;  
    
    console.log(date);

}, 1000);

showTime = () => { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = " AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = " PM"; 
    } 
    if (hour == 0) { 
        hour = 12; 
        am_pm = " AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    let currentTime = hour + ":" + min + ":" + sec + am_pm; 
    document.getElementById("digitalClock").innerHTML = currentTime; 
    setTimeout(showTime, 1000)
}
showTime(); 
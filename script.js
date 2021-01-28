setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    am_pm = " AM"; 
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;    
    secondHand.style.transform = `rotate(${srotation}deg)`;  
    
    console.log(date);

    if (htime > 12) { 
        htime -= 12; 
        am_pm = " PM"; 
    } 
    if (htime == 0) { 
        htime = 12; 
        am_pm = " AM"; 
    } 
  
    htime = htime < 10 ? "0" + htime : htime; 
    mtime = mtime < 10 ? "0" + mtime : mtime; 
    stime = stime < 10 ? "0" + stime : stime; 
  
    let currentTime = htime + ":" + mtime + ":" + stime + am_pm; 
    document.getElementById("digitalClock").innerHTML = currentTime; 

}, 1000);


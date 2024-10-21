function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // 24-hour time format
    const time = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    
    document.getElementById('clock').textContent = time;
    updateGreeting(hours);
}

// Format time with leading zero if less than 10
function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

// Update greeting based on time of day
function updateGreeting(hours) {
    const greetingElement = document.getElementById('greeting');
    
    if (hours >= 5 && hours < 12) {
        greetingElement.textContent = "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingElement.textContent = "Good Afternoon!";
    } else {
        greetingElement.textContent = "Good Evening!";
    }
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock and greeting
updateClock();

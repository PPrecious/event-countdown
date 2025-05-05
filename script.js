let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval); 

    const eventName = document.getElementById("eventName").value;
    const eventDate = new Date(document.getElementById("eventDate").value);
    document.getElementById("eventTitle").innerText = `Countdown to ${eventName}`;

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate.getTime() - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "🎉 The event has started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }, 1000);
}

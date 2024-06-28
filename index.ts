// Function to start a countdown timer
function startTimer(seconds: number): void {
    console.log(`Timer started for ${seconds} seconds...`);

    // Using setTimeout to implement the timer
    setTimeout(() => {
        console.log("Timer finished!");
    }, seconds * 1000); // Convert seconds to milliseconds
}

// Starting a countdown timer for 5 seconds
startTimer(10);

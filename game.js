var attempts = 0;
var target = Math.floor(Math.random() * 99 + 1);
var guess = prompt("Guess");
while(guess != target) {
    if(attempts > 5) {
        var range = Math.max(Math.min(target - 30 + attempts * 2, target - 1), 1) + " And " + Math.max(Math.min(target + 30 - attempts * 2, 100), target + 1);
        if(guess < target) guess = prompt("Guess Higher: It's Between " + range);
        else if(guess > target) guess = prompt("Guess Lower: It's Between " + range);
        else guess = prompt("That Is Not A number. Guess Again.")
    }
    else {
        if(guess < target) guess = prompt("Guess Higher");
        else if(guess > target) guess = prompt("Guess Lower");
        else guess = prompt("That Is Not A Number. Guess Again.")
    }
    attempts++;
}
alert("You Win! Guesses: " + attempts);
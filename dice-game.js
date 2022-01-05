function rollDice() {
    let goldCoins= 0;
    for (let i = 0; i < 20; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("You roll a " + roll + ".");
        if (roll === 1) {
            alert("Game Over, no more rolls!");
            break;
        }
        // if (roll === 4) {
        //     while (goldCoins > 0);
        //     let (goldCoins -= 1);
        // }
        if (roll < 1) {
            continue;
        }

        if (roll < 5) {
            continue;
        }
        if (roll === 5) {
            alert("Congratulations, you win " + roll + " gold coins!");
        goldCoins += roll;
            alert("You have won a total of " + goldCoins + " gold coins so far!"); 
        }
        if (roll === 6) {
            alert("Congratulations, you win " + roll + " gold coins!");
        goldCoins += roll;
            alert("You have won a total of " + goldCoins + " gold coins so far!"); 
        }
    }
    alert("Nice job! You won a total of " + goldCoins + " gold coins!");
}

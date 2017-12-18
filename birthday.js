var daysUntilMyBirthday = 60;

for (var i = daysUntilMyBirthday; i >= 0; i--) {
    if (i >= 30) {
        console.log( i + " days until my birthday. Such a long time... :(");
        continue;
    } else if (i < 30 && i > 5) {
        console.log( i + " days until my birthday!");
        continue;
    } else if ( i <= 5 && i !== 0) {
        console.log( i + " DAYS UNTIL MY BIRTHDAY");
        continue;
    } else {
        console.log("ITS MY BIRTHDAY");
    }
}
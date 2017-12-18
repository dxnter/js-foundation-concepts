// function randomChance(quarter) {
//     for (var i = quarter; i >= 0; i--) {
//         var chance = Math.floor((Math.random() * 100) + 1);        
//         var random = Math.floor((Math.random() * 100) + 1);
//         var winnings = Math.floor((Math.random() * 50) + 50);    
//         if (chance === random) {
//             console.log(winnings += quarter);
//             break;
//         } else {
//             console.log("You didn't win!");
//         }
//     }
// }
// randomChance(15);

var quarter = 10;

while (quarter > 0) {
    var chance = Math.floor((Math.random() * 100) + 1);
    var random = Math.floor((Math.random() * 100) + 1);
    var winnings = Math.floor((Math.random() * 50) + 50);
    if (chance === random) {
        console.log(winnings += quarter);
        break;
    } else {
        console.log("You didn't win!");
    }
    quarter--;
}

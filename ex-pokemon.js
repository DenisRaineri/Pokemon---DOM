const fs = require('fs');
const { format } = require('path');

// fs.writeFileSync("teste.txt", "isto é incrível!");

const text = fs.readFileSync("pokeipsum.txt").toString();

let arr = text.split(" ");
for(let j = 0; j < arr.length; j++) {
    var countSquirtle = 0;
    var countWartortle = 0;
    var countBlastoise = 0;
    if(arr[j] == "Squirtle")
    {countSquirtle=+ countSquirtle}
    else if(arr[j] == "Wartortle")
    {countWartortle=+ countWartortle}
    else if(arr[j] == "Blastoise")
    {countBlastoise=+ countBlastoise}
}
console.log(countSquirtle)



for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "Squirtle" || countSquirtle == 1){
        text[i] = text[i].replace(arr[i], "$Wartortle$")
    } else if(arr[i] == "Squirtle" || countSquirtle == 2){
        text[i] = text[i].replace(arr[i], "%Wartortle%")
    } else if(arr[i] == "Squirtle" || countSquirtle == 3){
        text[i] = text[i].replace(arr[i], "@Wartortle@")
    }

    if(arr[i] == "Wartortle" || countWartortle == 1){
        text = text.replace(arr[i], "$Blastoise$")
    } else if(arr[i] == "Wartortle" || countWartortle == 2){
        text = text.replace(arr[i], "%Blastoise%")
    } else if(arr[i] == "Wartortle" || countWartortle == 3){
        text = text.replace(arr[i], "@Blastoise@")
    }

    if(arr[i] == "Blastoise" || countBlastoise == 1){
        text = text.replace(arr[i], "$Squirtle$")
    } else if(arr[i] == "Blastoise" || countBlastoise == 2){
        text = text.replace(arr[i], "Squirtle%")
    } else if(arr[i] == "Blastoise" || countBlastoise == 3){
        text = text.replace(arr[i], "@Squirtle@")
    }
} 
var finalText = arr.join(" ");
console.log(`Total de Squirtles: ${countSquirtle}`)
console.log(`Total de Wartortle: ${countWartortle}`)
console.log(`Total de Blastoise: ${countBlastoise}`)
console.log(finalText)

// console.log(arr)

// for(let j = 0; j < arr.length; j++) {

//     if(arr[j] === "Squirtle"){countSquirtle++;}
//     else if(arr[j] === "Wartortle"){countWartortle++;}
//     else if(arr[j] === "Blastoise"){countBlastoise++;}
//     // SQUIRTLE
//     if(arr[j] === "Squjrtle" || countSquirtle === 1){
//         arr[j] = "$Squirtle$"
//     } else if(arr[j] === "Squirtle" || countSquirtle === 2){
//         arr[j] = "%Squirtle%"
//     } else if(arr[j] === "Squirtle" || countSquirtle === 3){
//         arr[j] = "@Squirtle@"
//     }
//     // WARTORTLE
//     if(arr[j] === "Wartortle" || countWartortle === 1){
//         arr[j] = "$Wartortle$"
//     } else if(arr[j] === "Wartortle" || countWartortle === 2){
//         arr[j] = "%Wartortle%"
//     } else if(arr[j] === "Wartortle" || countWartortle === 3){
//         arr[j] = "@Wartortle@"
//     }
//     // BLASTOISE
//     if(arr[j] === "Blastoise" || countBlastoise === 1){
//         arr[j] = "$Blastoise$"
//     } else if(arr[j] === "Blastoise" || countBlastoise === 2){
//         arr[j] = "%Blastoise%"
//     } else if(arr[j] === "Blastoise" || countBlastoise === 3){
//         arr[j] = "@Blastoise@"
//     }
//     let finalText = arr.join(" ")
// }


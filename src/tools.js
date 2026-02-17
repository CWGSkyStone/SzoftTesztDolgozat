/*
* File: tools.js
* original Github: https://github.com/oktatte/tepentagon.git
* Github: https://github.com/CWGSkyStone/SzoftTesztDolgozat
* calcArea forkolva a modulba
* Dátum: 2026.02.17
*/

function calcArea(sideLength) {
    return Math.sqrt(25+10*Math.sqrt(5)) / 4 * Math.pow(sideLength, 2)
}

export { calcArea }
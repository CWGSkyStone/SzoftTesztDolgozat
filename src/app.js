/*
* File: app.js
* original Github: https://github.com/oktatte/tepentagon.git
* Github: https://github.com/CWGSkyStone/SzoftTesztDolgozat
* calcArea külön modulba került
* Dátum: 2026.02.17
*/

import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { calcArea } from './tools.js'

const doc = {
    pentaForm: document.getElementById('pentaForm'),
    sideLength: document.getElementById('sideLength'),
    pentagonArea: document.getElementById('pentagonArea')
}

doc.pentaForm.addEventListener('submit', (e) => {
    e.preventDefault()
    render()
})

function render() {
    const sideLength = doc.sideLength.value
    const pentagonArea = calcArea(sideLength)
    doc.pentagonArea.value = pentagonArea
}




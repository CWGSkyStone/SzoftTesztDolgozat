/*
* calcArea külön modulba került
* File: app.js
* Github: https://github.com/oktatte/tepentagon.git
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




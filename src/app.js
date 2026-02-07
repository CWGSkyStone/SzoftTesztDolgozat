import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

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


function calcArea(sideLength) {
    return Math.sqrt(25+10*Math.sqrt(5)) / 4 * Math.pow(sideLength, 2)
}

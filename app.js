let mode_input = document.getElementsByClassName("mode_choose")

let colorsCount = 2
const minColors = 2
const maxColors = 4

function generate(mode, deg, colorsArray){
    let header = document.querySelector('.gradient-view')
    document.getElementsByClassName("wrapper-css")[0].style.display = 'flex'
    if (mode === 'linear-gradient'){
        let css_code = `background: linear-gradient(${deg}deg, ${colorsArray.join(', ')});`
        header.style.cssText += css_code
        document.getElementById("css-code").innerHTML = css_code
    }
    else if(mode === 'radial-gradient') {
        let css_code = `background: radial-gradient(circle, ${colorsArray.join(', ')});`
        header.style.cssText += css_code
        document.getElementById("css-code").innerHTML = css_code
    }
}

function get_values(){
    let mode = 'linear-gradient'
    if (mode_input[0].checked) mode = 'linear-gradient'
    if (mode_input[1].checked) mode = 'radial-gradient'

    let deg = document.getElementById("deg").value
    let colorsArray = []
    for (i of document.getElementsByClassName("one-color")){
        let color = i.children[0].value
        let procent = i.children[1].value + '%'
        colorsArray.push(`${color} ${procent}`)
    }
    generate(mode, deg, colorsArray)

}

function addColor() {
    if (colorsCount<maxColors) {
        document.querySelector(".colors").innerHTML += `
        <div class="one-color">
            <input type="color" class="color">
            <input type="number" value="100">
            <img src="./images/x-lg.svg" alt="x" class="close" onclick="remove_color(event)">
        </div>`
        colorsCount++
    }
    if (colorsCount===maxColors){
        document.querySelector('.add').style.display = 'none'
    }
}
function remove_color(event){
    if (colorsCount > minColors){
        event.target.parentNode.remove()
        colorsCount--
        document.querySelector('.add').style.display = 'inline-block'
    }
}
document.getElementById("copy").onclick = () => {
    navigator.clipboard.writeText(document.getElementById("css-code").textContent)
    document.getElementById("copied").style.display = "inline-block"
    setTimeout(function(){
        document.getElementById("copied").style.display = 'none'
    }, 3000)
}

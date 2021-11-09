
function quadrado(){
    let lado = document.getElementById("ladoQuadrado").value
    let area1 = Math.pow(lado,2)
    console.log(area1)
    
    return [area1]
 
}


function circulo(){
    let raio = document.getElementById("raioCirculo").value
    let area = Math.PI * Math.pow(raio,2)
    console.log(area)
    return [area]
}


function triangulo(){
    let base = document.getElementById("ladoTriangulo").value
    let altura = document.getElementById("altTriangulo").value
    let area = (base * altura) /2
    console.log(area)

    return[area]
}

function retangulo(){
    let base = document.getElementById("ladoRetangulo").value
    let altura = document.getElementById("altRetangulo").value
    let area = base * altura
    console.log(area)
    
    return[area]
}

function trapezio(){
    let baseMaior = document.getElementById("baseMaiorTrapezio").value
    let baseMenor = document.getElementById("baseMenorTrapezio").value
    let altura = document.getElementById("altTrapezio").value
    let area = (parseInt(baseMaior) + parseInt(baseMenor) ) * altura / 2
    console.log(area)
    return[area]
}

function quadrado(){
    let lado = document.getElementById("ladoQuadrado").value
    let area = Math.pow(lado,2)
    return [area]
}


function circulo(){
    let raio = document.getElementById("raioCirculo").value
    let area = Math.PI * Math.pow(raio,2)
    return [area]
}


function triangulo(){
    let base = document.getElementById("ladoTriangulo").value
    let altura = document.getElementById("altTriangulo").value
    let area = (base * altura)/2
    return[area]
}

function retangulo(){
    let base = document.getElementById("ladoRetangulo").value
    let altura = document.getElementById("altRetangulo").value
    let area = base * altura
    return[area]
}

function trapezio(){
    let baseMaior = document.getElementById("baseMaiorTrapezio").value
    let baseMenor = document.getElementById("baseMenorTrapezio").value
    let altura = document.getElementById("altTrapezio").value
    let area = ((baseMaior+baseMenor)*altura)/2
    return[area]
}
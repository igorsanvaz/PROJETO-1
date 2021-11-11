function quadrado() {
  let lado = document.getElementById("ladoQuadrado").value
  let area = Math.pow(lado, 2)
  let apresentacao = document.getElementById("CalcQ")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("ladoQuadrado").value = null
  return [area]
  
}

function circulo() {
  let raio = document.getElementById("raioCirculo").value
  let area = Math.PI * Math.pow(raio, 2);
  let apresentacao = document.getElementById("CalcC")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("raioCirculo").value = null
  return [area.toFixed(2)]
}

function triangulo() {
  let base = document.getElementById("ladoTriangulo").value
  let altura = document.getElementById("altTriangulo").value
  let area = (base * altura) / 2;
  let apresentacao = document.getElementById("CalcT")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("ladoTriangulo").value =null
  document.getElementById("altTriangulo").value = null
  return [area]
}

function retangulo() {
  let base = document.getElementById("ladoRetangulo").value
  let altura = document.getElementById("altRetangulo").value
  let area = base * altura;
  let apresentacao = document.getElementById("CalcR")
  apresentacao.innerHTML = area + " m²";
  document.getElementById("ladoRetangulo").value = null
  document.getElementById("altRetangulo").value = null
  return [area]
}

function trapezio() {
  let baseMaior = document.getElementById("baseMaiorTrapezio").value
  let baseMenor = document.getElementById("baseMenorTrapezio").value
  let altura = document.getElementById("altTrapezio").value
  let area = ((parseInt(baseMaior) + parseInt(baseMenor)) * altura) / 2;
  let apresentacao = document.getElementById("CalcTr")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("baseMaiorTrapezio").value= null
  document.getElementById("baseMenorTrapezio").value = null
  document.getElementById("altTrapezio").value = null
  return [area]
}

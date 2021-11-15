/*
              UNIFEI
ECOI35.1 - DESENVOLVIMENTO DE SISTEMAS WEB - T01
CURSOS: ENGENHARIA DE COMPUTAÇÃO - ICT
        ENGENHARIA DE CONTROLE E AUTOMAÇÃO
        
ALUNOS: IGOR SANTOS VAZ - 2020022850
        SAMUEL GOMES COSTA - 2021017012
*/

function quadrado() {
  let lado = document.getElementById("ladoQuadrado").value
  let area = Math.pow(lado, 2)
  let apresentacao = document.getElementById("CalcQ")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("ladoQuadrado").value = ""
  return [area]
  
}

function circulo() {
  let raio = document.getElementById("raioCirculo").value
  let area = Math.PI * Math.pow(raio, 2);
  let apresentacao = document.getElementById("CalcC")
  apresentacao.innerHTML = area.toFixed(3) + " m²"
  document.getElementById("raioCirculo").value = ""
  return [area]
}

function triangulo() {
  let base = document.getElementById("ladoTriangulo").value
  let altura = document.getElementById("altTriangulo").value
  let area = (base * altura) / 2;
  let apresentacao = document.getElementById("CalcT")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("ladoTriangulo").value = ""
  document.getElementById("altTriangulo").value = ""
  return [area]
}

function retangulo() {
  let base = document.getElementById("ladoRetangulo").value
  let altura = document.getElementById("altRetangulo").value
  let area = base * altura;
  let apresentacao = document.getElementById("CalcR")
  apresentacao.innerHTML = area + " m²";
  document.getElementById("ladoRetangulo").value = ""
  document.getElementById("altRetangulo").value = ""
  return [area]
}

function trapezio() {
  let baseMaior = document.getElementById("baseMaiorTrapezio").value
  let baseMenor = document.getElementById("baseMenorTrapezio").value
  let altura = document.getElementById("altTrapezio").value
  let area = ((parseInt(baseMaior) + parseInt(baseMenor)) * altura) / 2;
  let apresentacao = document.getElementById("CalcTr")
  apresentacao.innerHTML = area + " m²"
  document.getElementById("baseMaiorTrapezio").value= ""
  document.getElementById("baseMenorTrapezio").value = ""
  document.getElementById("altTrapezio").value = ""
  return [area]
}

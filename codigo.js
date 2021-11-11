function quadrado() {
  let lado = document.getElementById("ladoQuadrado").value;
  let area = Math.pow(lado, 2);
  console.log(area); 
  let apresentacao = document.getElementById("CalcQ")
  let textoresp = document.createElement("p")
  textoresp.append(area+ " m²")
  apresentacao.appendChild (textoresp);
  document.getElementById("ladoQuadrado").value = ""
  return [area];
}

function circulo() {
  let raio = document.getElementById("raioCirculo").value;
  let area = Math.PI * Math.pow(raio, 2);
  console.log(area.toFixed(2));
  let apresentacao = document.getElementById("CalcC")
  let textoresp = document.createElement("p")
  textoresp.append(area.toFixed(2)+ " m²")
  apresentacao.appendChild (textoresp);
  document.getElementById("raioCirculo").value = ""
  return [area.toFixed(2)];
}

function triangulo() {
  let base = document.getElementById("ladoTriangulo").value;
  let altura = document.getElementById("altTriangulo").value;
  let area = (base * altura) / 2;
  console.log(area);
  let apresentacao = document.getElementById("CalcT")
  let textoresp = document.createElement("p")
  textoresp.append(area+ " m²")
  apresentacao.appendChild (textoresp);
  document.getElementById("ladoTriangulo").value = ""
  document.getElementById("altTriangulo").value = ""
  return [area];
}

function retangulo() {
  let base = document.getElementById("ladoRetangulo").value;
  let altura = document.getElementById("altRetangulo").value;
  let area = base * altura;
  console.log(area);
  let apresentacao = document.getElementById("CalcR")
  let textoresp = document.createElement("p")
  textoresp.append(area+ " m²")
  apresentacao.appendChild (textoresp);
  document.getElementById("ladoRetangulo").value = ""
  document.getElementById("altRetangulo").value = ""
  return [area];
}

function trapezio() {
  let baseMaior = document.getElementById("baseMaiorTrapezio").value;
  let baseMenor = document.getElementById("baseMenorTrapezio").value;
  let altura = document.getElementById("altTrapezio").value;
  let area = ((parseInt(baseMaior) + parseInt(baseMenor)) * altura) / 2;
  console.log(area);
  let apresentacao = document.getElementById("CalcTr")
  let textoresp = document.createElement("p")
  textoresp.append(area+ " m²")
  apresentacao.appendChild (textoresp);
  document.getElementById("baseMaiorTrapezio").value= ""
  document.getElementById("baseMenorTrapezio").value = ""
  document.getElementById("altTrapezio").value = ""
  return [area];
}

const dataInicial = document.querySelector('#txtn1')
const dataFinal = document.querySelector('#txtn2')
const check = document.querySelector('#check')
const botao = document.querySelector('#txtb')

function calcular() {
    let dI = new Date(dataInicial.value)
    let dF = new Date(dataFinal.value)
    let sub = dF - dI  
    let diffDays = Math.ceil(sub / (1000 * 60 * 60 * 24));
    res.innerHTML = `Resultado: ${diffDays} Dias`
}


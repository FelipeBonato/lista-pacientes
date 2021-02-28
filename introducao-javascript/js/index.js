const titulo = document.querySelector('.titulo');
titulo.textContent = "Voce conseguiu peba!!";

// pegando todos <tr> da minha tabela
const pacientes = document.querySelectorAll('.paciente');
//console.log(pacientes)

//fazendo a leitura da list para acesso
for(let i = 0; i < pacientes.length; i++){

    // guardando minha List em paciente após o for
    const paciente = pacientes[i];
   
    const tdPeso = paciente.querySelector('.info-peso')
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector('.info-altura')
    const altura = tdAltura.textContent;
    
    // let pois está trocando os valores
    let tdIMC = paciente.querySelector('.info-imc')

    let pesoEhValido = true;
    let alturaEhValida = true;

    //condições para tabale IMC
    if(peso <= 0 || peso >= 300){
        pesoEhValido = false;
        tdIMC.textContent = 'Peso inválido'
        
    }
    if(altura < 1.00 || altura > 3.00){
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida!"
    }
    if(pesoEhValido && alturaEhValida ){
        const imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2 );
    }
}

// criar funcao ao clicar
// guardar valores do formulario
// criar elementos
// guardar valores dos formularios nos elementos
//criar tabela
// dar appenchild elementos td dentro da tr
// criar tabela e add o elementro tr

const botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(evento){
    evento.preventDefault();
    
    const form = document.querySelector('#form-adiciona');

    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement('tr');

    const nomeTD = document.createElement('td');
    const pesoTD = document.createElement('td');
    const alturaTD = document.createElement('td');
    const gorduraTD = document.createElement('td');


    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;

    pacienteTr.appendChild(nomeTD);
    pacienteTr.appendChild(pesoTD);
    pacienteTr.appendChild(alturaTD);
    pacienteTr.appendChild(gorduraTD);

    console.log(pacienteTr);

    const tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
    
});
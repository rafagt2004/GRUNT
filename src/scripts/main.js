document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(event){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo - parseInt(numeroMaximo);

        let numerAleatorio = Math.random() * numeroMaximo;
        numerAleatorio = Math.floor(numerAleatorio + 1);
        document.getElementById('resultado-valor').innerText = numerAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    })
})
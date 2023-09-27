let inputname = document.querySelector('.inputname')
let inputcpf = document.querySelector('.inputcpf')
let inputemail = document.querySelector('.inputemail')

let btnenviar = document.querySelector('.btnenviar')

btnenviar.addEventListener('click', () => {
    alert("Nome: " + inputname.value + "\nCPF: " + inputcpf.value + "\nE-mail: " + inputemail.value);
})
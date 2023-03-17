// Variables
const regExName = /^([a-z ñáéíóú]{1,50})$/i;
const regExEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
const regExPhone = /^[0-9+/s]{8,12}$/;
let inputFullname = document.querySelector("#form-fullname");
let inputEmail = document.querySelector("#form-email");
let inputPhone = document.querySelector("#form-phone");
let inputAddress = document.querySelector("#form-address");
let inputComuna = document.querySelector("#form-comuna");
let inputRegion = document.querySelector("#form-region");  
let inputText = document.querySelector("#form-text");

  
  // Validacion Formulario Compra

  function validateFormCart() {



    if (!inputFullname.value) {
      alert('Ingrese Nombre Completo');
      return false;
    } else if (!regExName.test(inputFullname.value)) {
      alert('El nombre solo debe contener letras');
      return false;
    } else if (!inputEmail.value) {
      alert('Ingrese Email');
      return false;
    } else if (!regExEmail.test(inputEmail.value)) {
      alert('El formato de email no cumple los requisitos ej: mail@ejemplo.com');
      return false;
    } else if (!inputPhone.value) {
      alert('Ingrese Teléfono');
      return false;
    } else if (!regExPhone.test(inputPhone.value)) {
      alert("El teléfono debe incluir al menos 8 números, ejemplo: +56933333333");
      return false;
    } else if (!inputAddress.value) {
      alert('Ingrese Dirección');
      return false;
    } else if (!inputComuna.value) {
      alert('Ingrese Comuna');
      return false;
    } else if (!inputRegion.value) {
      alert('Ingrese Región');
    }
     else {
      enviarEmail();
    }
  }
  
  const buttonSubmitCart = document.querySelector("#form-submitcart");
  buttonSubmitCart.addEventListener('click', validateFormCart);
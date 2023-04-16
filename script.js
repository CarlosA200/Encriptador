      /*funcion botones encriptar/desencriptar*/
  function realizarAccion() {
    var texto = document.getElementById("texto").value;
    var accion = document.querySelector('input[name="accion"]:checked').value;
    var resultado = "";
    
    if (accion === "encriptar") {
      resultado = encriptar(texto);
    } else {
      resultado = desencriptar(texto);
    }
    
    document.getElementById("resultado").value = resultado;
  }
  
      /*funcion para encriptar el texto*/
  function encriptar(texto) {
    var encriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
  }
  
      /*funcion para desencriptar el texto*/
  function desencriptar(texto) {
    var desencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
  }

      /*funcion btn copiar*/
  function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
  }

      /*variables y funcion cifrar titulo de la pagina*/
  const title = document.getElementById('title'); 
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  
  function generateRandomCode(length) {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
  
      /*variables y funcion descifrar titulo de la pagina*/
  function decodeTitle(title) {
    const originalTitle = title.textContent;
    const length = originalTitle.length;
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter >= length) {
        clearInterval(intervalId);
        title.textContent = originalTitle;
        return;
      }
      const randomCode = generateRandomCode(length - counter);
      const decodedTitle = originalTitle.slice(0, counter) + randomCode;
      title.textContent = decodedTitle;
      counter++;
    }, 100);
  }
  
  decodeTitle(title);

  const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
});

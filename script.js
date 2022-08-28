//Comprobacion de requisitos
function checkType(textoSolicitado) {
  textoSolicitado = String(textoSolicitado).trim();
  const regxs = {
    "lower": /^[a-z0-9 ]+$/,
    "upper": /^[A-Z0-9 ]+$/,
    "upperLower": /^[A-Za-z0-9 ]+$/,
    "specialCharacters": /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~A-Za-zÁÉÍÓÚáéíóúñÑ0-9 ]+$/,
  };

  if (regxs.lower.test(textoSolicitado)) {
    return '0';
  }

  if (regxs.upper.test(textoSolicitado)){
   return '1';
  }

  if (regxs.upperLower.test(textoSolicitado)){
   return '2';
  }
  if (regxs.specialCharacters.test(textoSolicitado)){
    return '3';
  }
  return -1;
}
//


// función para obtener datos, encriptar y devolver el texto
function toEncrypt() {
  var textoSolicitado = document.getElementById("input-text").value;
    // Comprobar requisitos
      var result = checkType(textoSolicitado);

      if (result == '1') {
        return alert('El mensaje no debe de contener mayúsculas');
    } else if (result == '2') {
        return alert('El mensaje no debe de contener mayúsculas');
    } else if (result == '3') {
      return alert('El mensaje no debe de contener carácteres especiales');
    } else if (result == '-1') {
      return alert('El campo se encuentra vacío.');
    } 


  var encryptedText = textoSolicitado;
    var encrypting = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat"
  
    };
    encryptedText = encryptedText.replace(/a|e|i|o|u/g, function(matched){
      return encrypting[matched];
    });
    
  console.log(encryptedText);
  document.getElementById("resultado").innerHTML = encryptedText;
  }

// función para obtener datos, desencriptar y devolver el texto
function toDencrypt() {
  var textoSolicitado = document.getElementById("input-text").value;
// Comprobar requisitos
      var result = checkType(textoSolicitado);

      if (result == '1') {
        return alert('El mensaje no debe de contener mayúsculas');
    } else if (result == '2') {
        return alert('El mensaje no debe de contener mayúsculas');
    } else if (result == '3') {
      return alert('El mensaje no debe de contener carácteres especiales');
    } else if (result == '-1') {
      return alert('El campo se encuentra vacío.');
    }


  var dencryptedText = textoSolicitado;
    var dencrypting = {
      ai: "a",
      enter: "e",
      imes: "i",
      ober: "o",
      ufat: "u"
  
    };
    dencryptedText = dencryptedText.replace(/ai|enter|imes|ober|ufat/g, function(matched){
      return dencrypting[matched];
    });
    
  console.log(dencryptedText);
  document.getElementById("resultado").innerHTML = dencryptedText;
}

// botón para copiar al portapapeles
function copyToClipBoard() {

  var content = document.getElementById('resultado');
  content.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
  }


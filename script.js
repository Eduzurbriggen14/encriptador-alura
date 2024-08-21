const textAreaEntrada = document.querySelector('.textarea');
const textAreaSalida = document.querySelector('.mensaje');
const botonCopiar = document.querySelector('.boton-copiar');
const botonDesencriptar = document.querySelector('.boton-desencriptar');

function encriptar(texto) {
    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();

        if (letra in reglasEncriptacion) {
            textoEncriptado += reglasEncriptacion[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    const reglasDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;

    for (let clave in reglasDesencriptacion) {
        textoDesencriptado = textoDesencriptado.replaceAll(clave, reglasDesencriptacion[clave]);
    }

    return textoDesencriptado;
}

function encriptarTexto() {
    const texto = textAreaEntrada.value.toLowerCase();
    const textoEncriptado = encriptar(texto);
    textAreaSalida.value = textoEncriptado;
    textAreaEntrada.value = '';
    textAreaSalida.classList.add('sin-imagen');  // Agregar clase para ocultar imagen
}

function desencriptarTexto() {
    const texto = textAreaEntrada.value.toLowerCase();
    const textoDesencriptado = desencriptar(texto);
    textAreaSalida.value = textoDesencriptado;
    textAreaEntrada.value = '';
    textAreaSalida.classList.add('sin-imagen');  // Asegurar que la imagen siga oculta
}

function copiarTexto() {
    navigator.clipboard.writeText(textAreaSalida.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

botonCopiar.addEventListener('click', copiarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);
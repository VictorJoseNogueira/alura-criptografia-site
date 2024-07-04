let replace_vogais = { 'a': 'enter', 'e': 'imes', 'i': 'ai', 'o': 'ober', 'u': 'ufat' };
let replace_words = { 'enter': 'a', 'imes': 'e', 'ai': 'i', 'ober': 'o', 'ufat': 'u' };
let vogais = 'aeiou';

function hide_and_show(texto){
    var imagen_remove = document.getElementById("remove-imagem");
    imagen_remove.style.display = 'none';

    //removendo h2
    var h2_remove = document.getElementById("h2-remove");
    h2_remove.style.display ='none';

    // removendo p
    var p_remove = document.getElementById("p-remove");
    p_remove.style.display = 'none';

// mostrar textarea e botão
    // mostrar textarea
    var textarea_encripted = document.getElementById("text-criptografar-id");
    textarea_encripted.classList.remove("hide-class");
    textarea_encripted.value = texto;

    // mostrar botão
    var btn_encripted = document.getElementById("copytext");
    btn_encripted.classList.remove("hide-class");

}

function copy(){
    var textarea_to_copy = document.getElementById("text-criptografar-id");

    //selecionar texto no campo
    textarea_to_copy.select();
    textarea_to_copy.setSelectionRange(0, 99999);// for mobile

    try{
        var successful = document.execCommand("copy");
        var copied_text =  textarea_to_copy.value;
        var msg = successful ? "texto copiado: " + copied_text: "falha ao copiar";
        alert(msg)
    }catch(err){
        console.error("erro ao copiar: ", err);
        alert('Erro ao copiar texto. Por favor, copie manualmente.');
    
    }
}

function criptografia() {
    let text = document.getElementById("text-criptografar").value;
    let frase_list = [];
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (vogais.includes(char)) {
            frase_list.push(replace_vogais[char] || char); // Substitui a vogal se existir em replace_vogais
        } else {
            frase_list.push(char); // Mantém o caractere se não for vogal
        }
    }
    
    let text_criptografado = frase_list.join(''); // Transforma a lista em uma string criptografada
    console.log(text_criptografado); // Exibe o texto criptografado no console para verificação
    
    hide_and_show(text_criptografado);
    return text_criptografado;
}


function descriptografia() {
    let text = document.getElementById("text-criptografar").value;
    for (let key in replace_words) {
        text = text.replaceAll(key, replace_words[key]);
    }
    console.log(text);
    hide_and_show(text)
    return text
}
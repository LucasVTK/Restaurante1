$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
})

$('form').validate({//Chamando o plugin de validação dentro da tag FORM!! SEMPRE LEMBRE DE COLOCAR EM '' e adicionando um objeto dentro desta funçao, no caso as {},depois disso, chamando embaixo, rules:{nome: {required:true}} temos que dizer se é false ou true e as regras de validação ficarão ali dentro.

    // ATENÇÃO!!!! Este plugin NÃO trabalha com ids, e sim com a tag NAME dentro da tag html, tambem não aceita traços!!
    rules:{
        nome:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        mensagem: {
            required:true
        },
        telefone:{
            required:false
        }
    },
    //Trocando a mensagem padrão do plugin
    messages:{
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira seu E-mail',
        mensagem:'Por favor digite sua mensagem para falar conosco!'   
    },
        submitHandler: function(form, evento){
            console.log(form)
            $('#success').text("Obrigado por entrar em contato, recebemos seu formulário e vamos o responder em breve!")
            $('#success').removeClass('d-none')
            $('#alerta').addClass('d-none')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos)
            $('#alerta').removeClass('d-none')
            $('#alerta').text(`Existem ${camposIncorretos} campos incorretos. Preencha-os corretamente para falar`)
            $('#success').addClass('d-none')
        }   
})


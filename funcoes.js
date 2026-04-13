const contato = require('./contatos.js')
const whatsappCont = contato.contatos["whats-users"]

const getListaDeContatos = function (){
    let listaContatos = whatsappCont

    return listaContatos
}

const getDadosDaConta = function(number){
    let dadosUsuario = []

    whatsappCont.forEach(function(itemDados){
        if(number == itemDados.number){

            dados = {
                nome : itemDados.account,
                nickname : itemDados.nickname,
                number : itemDados.number,
                foto : itemDados['profile-image'],
                cor : itemDados.background,
                dadoDeCriacao : itemDados['created-since']
            }

            dadosUsuario.push(dados)

        }

    })
    return dadosUsuario
}
const getDadosDeCadaUsuario = function(number){
    let contatoUsuario = []

    whatsappCont.forEach(function(itemUsuario){

        if(number == itemUsuario.number){

            itemUsuario.contacts.forEach(function(usuario){

                dadosContatos = {
                    nome : usuario.name,
                    foto : usuario.image,
                    descricao : usuario.description
                }

                contatoUsuario.push(dadosContatos)
            })
            
        }
    })
    return contatoUsuario
}
const getListarMensagens = function(number){
    let mensagensTrocadas = []

    whatsappCont.forEach(function(itemMensagem){

        if(number == itemMensagem.number){

            itemMensagem.contacts.forEach(function(mensagem){

                mensagensList = {
                    nome : mensagem.name,
                    descricao : mensagem.description,
                    imagem : mensagem.image,
                    mensagem : mensagem.messages
                }

                mensagensTrocadas.push(mensagensList)
            })
        }
    })
    return mensagensTrocadas
}
const getUsuarioEContato = function(name, numero){
    let listarConv = []

    whatsappCont.forEach(function(itemContato){

        if(numero == itemContato.number){
            itemContato.contacts.forEach(function(dadosNum){

                if(name == dadosNum.name){

                    conversaUsuario = {
                        nome : itemContato.account,
                        numero : itemContato.number,
                        contato : dadosNum.name,
                        mensagem : dadosNum.messages
                    }

                    listarConv.push(conversaUsuario)
                }
                
            })
        }
    })
    return listarConv
}
const getPesquisaDePalavras = function(numeroUsuario,nomeContato,palavraChave){
    let listaMensagens = []

    whatsappCont.forEach(function(user){
        if (numeroUsuario == user.number) {
            user.contacts.forEach(function(contatos){
                if (nomeContato == contatos.name) {
                    contatos.messages.forEach(function(mensagem){
                        if (mensagem.content.includes(palavraChave)) {
                            
                            listaMensagens.push(
                                {"sender":mensagem.sender, "conteudo":mensagem.content, "horario":mensagem.time}
                            )
                        }
                    })
                }   
            })
        }        
    })

    return listaMensagens
}
console.log(getPesquisaDePalavras(11987876567, "Ana Maria", "a"))

<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-25">
        <div class="scroll">
          <h4 :class="pegarClasse(msg)" v-for="msg in msgs">{{ msg.texto }}</h4>
        </div>
      </v-card>
      <label id="label" for="input">Digite sua mensagem:</label>
      <input type="text" id="input" v-model="texto" @focus="foco">
      <button id="btn" @click="addMensagem" v-if="!texto == ''">Enviar Mensagem</button>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'MessageApp',
  data() {
    return {
      msgs: [
        {texto: 'Olá como vai, é a Maria da empresa X-Tal?', tipo: 1},
        {texto: 'Olá estou bem e você Maria?', tipo: 2},
        {texto: 'Legal, você participou do nosso processo seletivo recentemente, e gostamos muito do seu desempenho.', tipo: 1},
        {texto: 'E portanto você foi aprovado neste processo seletivo!', tipo: 1},
      ],
      texto: '',
      texto2: 'Poderia estar vindo aqui na empresa amanhã, para acertarmos os detalhes da sua contratação',
      texto3: 'Certo, estaremos te aguardando às 10:00hr de amanhã, ok?',
      texto4: 'Bacana, combinado então. Obrigado e até lá!!'
    }
  },
  methods: {
    addMensagem() {
      setTimeout(() => 
      this.msgs.push({
        texto: this.texto,
        tipo: 2
      }), 2000)
    //  this.texto = ''
    },
    msgDigitando() {
      setTimeout(() => 
      this.msgs.push({
        texto: this.texto5,
        tipo: 3
      }), 15000)
    },
    addOutraMensagem1() {
      setTimeout(() => 
      this.msgs.push({
        texto: this.texto2,
        tipo: 1
      }), 50000)
    },
    addOutraMensagem2() {
      setTimeout(() => 
      this.msgs.push({
        texto: this.texto3,
        tipo: 1
      }), 88000)
    },
    addOutraMensagem3() {
      setTimeout(() => 
      this.msgs.push({
        texto: this.texto4,
        tipo: 1
      }), 120000)
    },
    foco() {
      var input = document.getElementsByTagName('input')[0];
      return input.value = ''
    },
    pegarClasse(msg) {
      if(msg.tipo == 1)
        return 'mensagens-a';
        
      if(msg.tipo == 2)
        return 'mensagens-a-b';

      if(msg.tipo == 3)
        return 'mensagens-a-b-c';
    },
    scrollNoFim() {
      var container = document.querySelector('.scroll')
      var alturaCont = container.scrollHeight
      container.scrollTop = alturaCont
    },
  },
  mounted() {
    this.scrollNoFim()
    this.addOutraMensagem1()
    this.addOutraMensagem2()
    this.addOutraMensagem3()
  },
  updated() {
    this.scrollNoFim()
  }
};
</script>

<style scoped>
#teste{
  background-image: url(../assets/tolk.jpg) no-repeat;
}
.mt-25{
  margin-top: 25px;
  margin-bottom: 25px;
}
.scroll{
  width: 630px;
  max-height: 470px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(../assets/tolk.jpg);
}
.mensagens-a{
  background-color: #80D8FF; 
  padding: 25px;
  max-width: auto;
  border-radius: 6px;
  margin-top: 15px;
}
.mensagens-a-b{
  background-color: #A5D6A7;
  max-width: auto;
  padding: 25px;
  border-radius: 6px;
  margin-top: 15px;
}
::-webkit-scrollbar{                              /* Largura da barra de rolagem */
  width: 10px;
}
::-webkit-scrollbar-track-piece{                  /* Fundo da barra de rolagem */
  background-color: #EEEEEE;
}
::-webkit-scrollbar-thumb:vertical{               /* Cor do indicador de rolagem */
  background-color: #BAC0C4;
}
::-webkit-scrollbar-thumb:vertical:hover{         /* Cor do indicador de rolagem - ao passar o mouse */
  background-color: #717D7E;
}
#label{
  color: #FFF;
  font-size: 18px;
}
#input{
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 35px;
  background-color: #FFF;
  outline: none;
  border-radius: 4px;
}
#btn{
  width: 100%;
  height: 35px;
  color: #FFF;
  background-color: #CD5C5C;
  border-radius: 4px;
  outline: none;
}
#btn:active{
  background-color: #F08080;
}
</style>
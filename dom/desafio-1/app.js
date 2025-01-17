new Vue({
    el: '#desafio',
    data: {
        nome: 'Wellington',
        idade: 39,
        imagemGoogle: 'https://super.abril.com.br/wp-content/uploads/2022/05/SI_corvo_site.jpg?crop=1&resize=1212,909'
    },
    computed: {
        idadeMultiplicadaPor3(){
            return this.idade * 3
        }
    },
    methods: {
        randomico: function(){
            return Math.random()
        }
    }
})
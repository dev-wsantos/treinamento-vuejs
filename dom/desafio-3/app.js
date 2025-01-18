new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ''
    },
    watch: {
        valor(){
            debugger
            if (this.valor == 37){
                this.resultado = 'Valor é igual.'
            } else {
                this.resultado = 'Valor alterado pelos botões'
            }
        },
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    },
    methods: {

    }
});
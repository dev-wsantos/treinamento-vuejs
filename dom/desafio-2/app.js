new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Exibindo alerta!!!')
        },
        capturarTexto(event){
            this.valor = event.target.value
        }
    }
})
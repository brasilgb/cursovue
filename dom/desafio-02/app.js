new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        clicou() {
            alert('Alguém clicou aqui!!')
        },
        alterarValor(event) {
            this.valor =  event.target.value
        }
    }
})
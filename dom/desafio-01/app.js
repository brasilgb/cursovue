new Vue({
    el: '#app',
    data: {
        nome: 'Anderson B. Rodrigues',
        idade: 48,
        imagegoogle: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
     },
    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },
        randomCod() {
            return Math.random()
        }
    }
})
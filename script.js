const app = new Vue(
    {
        el: '#app',
        data: {
            // qui dentro metteremo tutti i dati
            // della nostra applicazione.
            // la nostra app si attiverà e verrà 
            // eseguita in funzione di...
            text: "",
        },
        methods: {
            saluto: function (){
                alert(`Buongiorno ${this.text}!`);
            }
        },
    }
);
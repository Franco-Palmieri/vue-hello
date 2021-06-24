const app = new Vue(
    {
        el: '#app',
        data: {
            // qui dentro metteremo tutti i dati
            // della nostra applicazione.
            // la nostra app si attiverà e verrà 
            // eseguita in funzione di...
            text: "",
            classProva: "block",
            testoBottone: "Daje",
            picture: "./img/quadraro.jpg"
        },
        methods: {
            saluto: function (){
                alert(`Buongiorno ${this.text}!`);
            },
            prova: function (){
                if (this.classProva === "block"){
                    this.testoBottone = "Aridaje";
                    this.classProva = "none";
                }else {
                    this.testoBottone = "Daje!"
                    this.classProva = "block";
                }
            }
        },
    }
);
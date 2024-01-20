class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

        switch (this.tipo) {
            case 'mago':
                this.ataque = "magia"
                break
            case 'guerreiro':
                this.ataque = "espada"
                break
            case 'monge':
                this.ataque = "artes marciais"
                break
            case 'ninja':
                this.ataque = "shiruken"
                break
        }
    }
    atacar(ataque) {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}


let nick = new heroi("nickzrs", "19", "mago")
nick.atacar()
let sthe = new heroi("skaidreina", "20", "guerreiro")
sthe.atacar()
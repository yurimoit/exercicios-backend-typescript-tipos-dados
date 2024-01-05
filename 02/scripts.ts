interface Item2 {
    nome: string,
    idade: number,
    status: boolean
}

type ListaDeDados = Item2[];

const usuarios2: ListaDeDados = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscaNome = (lista: ListaDeDados, nomeBuscar: string): any => {
    const novaLista = lista.filter((item) => {
        return item.nome.toLocaleLowerCase().includes(nomeBuscar.toLocaleLowerCase())
    })
    return novaLista;
}

console.log(buscaNome(usuarios2, 'jo'));


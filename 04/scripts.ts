interface Item3 {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}


const geraEtiquetas = (lista: Item3): string[] => {
    let listaEtiquetas: string[] = []
    for (let index = 1; index <= lista.qtd; index++) {
        if (index > 99) {
            listaEtiquetas.push(`${lista.lote}-${lista.ano}-${index}`)
        } else if (index > 9) {
            listaEtiquetas.push(`${lista.lote}-${lista.ano}-0${index}`)
        } else {
            listaEtiquetas.push(`${lista.lote}-${lista.ano}-00${index}`)
        }
    }

    return listaEtiquetas
}

let resultado = geraEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
})

console.log(resultado);

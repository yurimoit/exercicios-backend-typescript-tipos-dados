
const soletrador = (palavra: string): string => {
    let palavraSoletrada: any = palavra.split("");
    palavraSoletrada = palavraSoletrada.join('-');
    return palavraSoletrada;
}

console.log(soletrador("programador"));

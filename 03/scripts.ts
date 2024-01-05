
const tabuada = (lista: number[]): void => {

    for (let item of lista) {
        if (item != 0) {
            for (let i = 0; i <= 10; i++) {
                console.log(`${item}x${i}=${item * i}`);
            }

            console.log("---------------\n");
        }
    }
}

tabuada([1, 5, 2, 0, 6]);
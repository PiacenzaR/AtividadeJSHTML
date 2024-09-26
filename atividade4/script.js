function encontrarMaior() {
    const arrayInput = document.getElementById("arrayInput").value;
    const array = arrayInput.split(",").map(Number);
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    document.getElementById("maiorNumero").innerText = maior;
}

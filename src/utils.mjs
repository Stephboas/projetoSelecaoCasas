// Função para embaralhar um array usando o algoritmo de Fisher-Yates
export function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para embaralhar as perguntas do questionário
export function embaralharPerguntas(perguntas) {
    // Crie uma cópia do array de perguntas para evitar modificar o array original
    const perguntasEmbaralhadas = [...perguntas];
    // Embaralhe as perguntas usando a função de embaralhamento de array
    return embaralharArray(perguntasEmbaralhadas);
}

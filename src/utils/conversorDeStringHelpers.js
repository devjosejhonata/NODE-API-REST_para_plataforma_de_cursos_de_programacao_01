/*
- Este arquivo exporta uma função para converter propriedades terminadas em 'Id' ou 'id' para números.
- Útil para garantir que IDs sejam tratados como números, especialmente em parâmetros de rota.
*/

module.exports = (objetoParams) => {
    // Percorre todas as propriedades do objeto recebido
    for (let propriedade in objetoParams) {
        // Verifica se a propriedade termina com 'Id' ou 'id'
        if (/Id|id/.test(propriedade)) {
            // Converte o valor da propriedade para número
            objetoParams[propriedade] = Number(objetoParams[propriedade]);
        }
    }
    // Retorna o objeto atualizado
    return objetoParams;
};

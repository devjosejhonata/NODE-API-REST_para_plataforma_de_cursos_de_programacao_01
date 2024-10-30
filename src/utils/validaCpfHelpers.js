/*
- Dentro desse arquivo contera uma função auxiliadora para simular uma validação de cpf;
*/

module.exports = (cpf) => {
    if (cpf.length !== 11) return false;
    return true;
};

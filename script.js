//ENUMERADOR
const candidatos = {
    CANDIDATO_X: 889,
    CANDIDATO_Y: 847,
    CANDIDATO_Z: 515,
    BRANCO: 0
}

Object.freeze(candidatos) // O freeze possui o objetivo de impedir que a constante seja modificada

function votacao() {
    let contVotoX = 0
    let contVotoY = 0
    let contVotoZ = 0
    let nulos = 0
    let branco = 0

    //Nesse caso serão 10 eleitores!
    for (i = 0; i < 9; i++) {
        let voto = prompt("Digite o seu voto:")
        let simOuNao = prompt("Gostaria de finalizar sua votação? (sim ou nao)")
        if ((simOuNao == "sim") && (parseInt(voto) >= 0) && (parseInt(voto) == candidatos.CANDIDATO_X)) {
            contVotoX = contVotoX + 1
        } else if ((simOuNao == "sim") && (parseInt(voto) >= 0) && (parseInt(voto) == candidatos.CANDIDATO_Y)) {
            contVotoY = contVotoY + 1
        } else if ((simOuNao == "sim") && (parseInt(voto) >= 0) && (parseInt(voto) == candidatos.CANDIDATO_Z)) {
            contVotoZ = contVotoZ + 1
        } else if ((simOuNao == "sim") && (parseInt(voto) >= 0) && (parseInt(voto) == candidatos.BRANCO)) {
            branco = branco + 1
        } else if ((simOuNao == "sim") && (parseInt(voto) >= 0) && (parseInt(voto) != candidatos.BRANCO) && (parseInt(voto) != candidatos.CANDIDATO_X) && (parseInt(voto) != candidatos.CANDIDATO_Y) && (parseInt(voto) != candidatos.CANDIDATO_Z)) {
            nulos = nulos + 1
        } else if ((simOuNao == "nao") || (!isNaN(parseInt(voto) && isFinite(voto)) <= 0)) {
            i = i - 1
        }
    }
    if ((contVotoX > contVotoY) && (contVotoX > contVotoZ)) {
        return alert(`Foram ${contVotoX} votos para o candidato X.
        Foram ${contVotoY} votos para o candidato Y.
        Foram ${contVotoZ} votos para o candidato Z.
        Foram ${branco} votos em branco.
        Foram ${nulos} votos nulos.
        O VENCEDOR FOI O CANDIDATO X!`)
    } else if (contVotoY > contVotoZ) {
        return alert(`Foram ${contVotoX} votos para o candidato X.
        Foram ${contVotoY} votos para o candidato Y.
        Foram ${contVotoZ} votos para o candidato Z.
        Foram ${branco} votos em branco.
        Foram ${nulos} votos nulos.
        O VENCEDOR FOI O CANDIDATO Y!`)
    } else if ((contVotoY == contVotoZ) && (contVotoY == contVotoX) && (contVotoX == contVotoZ)) {
        return alert(`Foram ${contVotoX} votos para o candidato X.
    Foram ${contVotoY} votos para o candidato Y.
    Foram ${contVotoZ} votos para o candidato Z.
    Foram ${branco} votos em branco.
    Foram ${nulos} votos nulos.
    EMPATE!`)
    } else {
        return alert(`Foram ${contVotoX} votos para o candidato X.
    Foram ${contVotoY} votos para o candidato Y.
    Foram ${contVotoZ} votos para o candidato Z.
    Foram ${branco} votos em branco.
    Foram ${nulos} votos nulos.
    O VENCEDOR FOI O CANDIDATO Z!`)
    }
}

votacao()
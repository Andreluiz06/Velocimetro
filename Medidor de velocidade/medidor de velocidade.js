//medidor de velocidade
//a cada 5 km do limite voce ganha 1 ponto na carteira
//math floor()
//no caso de pontos maior que 12 -> 'carteira suspendida' 
verificarvelocidade(65);


function verificarvelocidade(velocidade) {
    const velocidadeMaxima = 60;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima){
        console.log('Velocidade O.k');
    }else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos>=12)

        console.log('carteira suspensa ultrapassou 12 pontos');
    else
        console.log('pontos',pontos);
        
    }
}
const botoesCurtir = document.queryselectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let Curtiu = false;
    botaoCurtir. addEventListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu=== false){
            contador.textContent++;
            curtiu = true;}
            else{
                contador.textContent--;
                curtiu= false;
        }
    }
});

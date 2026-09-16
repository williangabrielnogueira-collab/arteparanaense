const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.foreach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtit);
    function curtir(){const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;}
            else{
    contador.textContent--;
    curtiu = false;
   }
}
});
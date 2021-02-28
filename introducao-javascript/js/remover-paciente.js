var tabela = document.querySelector("table");

//façaa funcao quando tiver double click
tabela.addEventListener("dblclick", function(event){
   event.target.parentNode.classList.add("fadeOut"); //opacidade

   setTimeout(function(){
       event.target.parentNode.remove();
   }, 2000);

   // event.target.parentNode.remove();//clicandona td remove um parente acima 

});
if(window.innerWidth==640){
        document.getElementsByClassName("bleed").style.display="none";
    }

var klick = 0;
$('.burger').click(function(){
if(klick<1){ 
    klick++
$(".menu").slideDown(1000);
$(".menuFake").slideDown(1000);
}else if(klick>0){
    $(".menu").slideUp(1000);
    $(".menuFake").slideUp(1000);
    klick--;
}
});




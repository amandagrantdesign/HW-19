console.log("Hello there");

$("#projectImg1").hover(function(){
    $(this).css("background-image", "url(./imgs/Postcardgif.gif)")
    $(this).css("border", "none")
},
    function(){
        $(this).css("background-image", "url(./imgs/postcardThumb.png)")
        // $(this).css("border", "red solid")
});

$("#projectImg2").hover(function(){
    $(this).css("background-image", "url(./imgs/BestiesGIF.gif)")
    $(this).css("border", "none")
},
    function(){
        $(this).css("background-image", "url(./imgs/bestiesThumb.png)")
        // $(this).css("border", "red solid")
});

$("#projectImg3").hover(function(){
    $(this).css("background-image", "url(./imgs/PCAUgif.gif)")
    $(this).css("border", "none")
},
    function(){
        $(this).css("background-image", "url(./imgs/pcauThumb.png)")
        // $(this).css("border", "red solid")
});

// $("#projectImg1").click(function(){
//     $(this).css("background-image", "url(..\imgs\Postcardgif.gif)")

// })
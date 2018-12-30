var fontFams = ['Permanent Marker','Gloria Hallelujah','Gochi Hand','Caveat','Orbitron']
var blinkColor

$(document).ready(function() {
    chooseFonts();
    setInterval(blink, 300);
})

function chooseFonts() {
    $(".blink-message-wrapper .blink-message span").each(function(index, element) {
        var fontChoice = Math.floor(Math.random()*fontFams.length)
        $(element).css("fontFamily", fontFams[fontChoice])
    })
}

function blink() {
    if($(".blink-message-wrapper .blink-message").hasClass("black")) {
        $(".blink-message-wrapper .blink-message").removeClass("black")
        $(".blink-message-wrapper .blink-message").addClass("yellow")
    }
    else {
        $(".blink-message-wrapper .blink-message").removeClass("yellow")
        $(".blink-message-wrapper .blink-message").addClass("black")
    }
}

$(document).ready(function(){

    //text-cycle
    phrases = [
        "some coffee",
        "help moving",
        "piano lessons",
        "errands done",
        "a clean oven",
        "computer help",
        "a TV mounted",
        "furniture built",
        "shelves hung",
        "rid of a body",
        "<em>anything</em>"
    ]

    var $textcycle = $("#text-cycle");
    setInterval(update, 3000);

    function update() {
        var i = phrases.indexOf($textcycle.text());
        var lineHeight = $textcycle.css("line-height");

        var $oldText = $("<span>" + $textcycle.text() + "</span>");
        $oldText.css("position","absolute");
        $oldText.css("top",0);
        var $newText = $("<span>" + phrases[(i+1) % (phrases.length)] + "</span>");
        $newText.css("position","absolute");
        $newText.css("top", "-" + lineHeight);

        $textcycle.css("overflow","hidden");
        $textcycle.css("position","relative");
        $textcycle.css("display","inline-block");
        $textcycle.css("width", "406px");
        $textcycle.css("height", "51px");
        $textcycle.text("");
        $textcycle.append($oldText);
        $textcycle.append($newText);

        $oldText.animate({
            top: lineHeight
        }, { duration: 200, queue: false });
        $newText.animate({
            top: 0
        }, { duration: 200, queue: false, complete: function(){
            $textcycle.text($newText.text());
            $textcycle.css("overflow","");
            $textcycle.css("position","");
            $textcycle.css("display","");
            $textcycle.css("width", "");
            $textcycle.css("height", "");
        }});
    }

});//document ready
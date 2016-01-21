$(function() {
    $('.modal-button').click(function() {
        if ($newsletter.find(".input-text").val().split("@").length > 1) {
            $("#myModal").modal();
        } else {
            $newsletter.find(".input-text").css({border:"2px solid red"});
            $newsletter.find(".button").prop("disabled","true")
        }
    });

    var $newsletter = $(".newsletter-form");
    $newsletter.keydown(function() {
        if ($newsletter.find(".input-text").val().split("@").length > 1) {
            $newsletter.find(".input-text").css({border:"2px solid #d8d8d8"});
            $newsletter.find(".button").removeProp("disabled")
        } else {
            $newsletter.find(".input-text").css({border:"2px solid red"});
            $newsletter.find(".button").prop("disabled","true")
        }
    });
});

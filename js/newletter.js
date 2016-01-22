$(function() {
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var $newsletter = $(".newsletter-form");
    $('.submit-newsletter').click(function() {
        if (validateEmail($newsletter.find(".input-text").val())) {
            $newsletter.fadeOut("slow", function() {
                $newsletter.replaceWith('<p class="submit-success">Thank you for signing up!</p>');
            });
        } else {
            $newsletter.find(".input-text").css({border:"2px solid red"});
            $newsletter.find(".button").prop("disabled","true");
            $(".newsletter-form").find(".input-text").prop("placeholder","Woops, you forgot to enter an email!")
        }
    });


    $newsletter.keyup(function() {
        if (validateEmail($newsletter.find(".input-text").val())) {
            $newsletter.find(".input-text").css({border:"2px solid #d8d8d8"});
            $newsletter.find(".button").removeProp("disabled")
        } else {
            $newsletter.find(".input-text").css({border:"2px solid red"});
            $newsletter.find(".button").prop("disabled","true")
        }
    });
});

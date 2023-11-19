$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Guardian",""],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

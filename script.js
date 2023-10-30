function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, includedLanguages: 'id,ja'}, 'google_translate_element');
}

document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close any open modal
        if (myModal.style.display === "block") {
            myModal.style.display = "none";
        }
    });
});

// Modal functionality
var myModal = document.getElementById('myModal');
var btn = document.getElementById("modalOpenBtn");
var span = document.getElementById("modalCloseBtn");

btn.onclick = function() {
    myModal.style.display = "block";
}

span.onclick = function() {
    myModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}

// Back to Top functionality
document.addEventListener("DOMContentLoaded", function() {

    var backToTopBtn = document.getElementById("backToTop");

    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
        console.log("Scroll function triggered!");  // Debugging line
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

});

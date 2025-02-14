window.addEventListener("scroll", updateProgress);

progressBar = document.getElementById("progressBar");
scrollProgress = document.getElementById("progressIndicator");


articleSubscription = 0;

if (document.getElementById("articleNext")) {
    articleNext = document.getElementById("articleNext").offsetHeight;
}
else {
    articleNext = 0;
}

footerSection = 150;

bottomOffset = ((articleSubscription + articleNext + footerSection + 250) / document.body.scrollHeight) * 100;
bottomOffset += bottomOffset * 1.1;


function updateProgress() {
    let percentScrolled = (window.pageYOffset / document.body.scrollHeight) * (100 + bottomOffset);
    scrollProgress.style.transform = "translateY(" + percentScrolled + "%)";

    if (percentScrolled > 100) {
        progressBar.style.animationName = "progress-fade-out";
        setTimeout(function () {
            progressBar.style.opacity = "0";
        }, 500);
    }
    else {
        progressBar.style.animationName = "progress-fade-in";
        setTimeout(function () {
            progressBar.style.opacity = "1";
        }, 500);
    }
}

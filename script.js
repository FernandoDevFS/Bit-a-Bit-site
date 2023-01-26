const title = document.querySelector('.site-title');

title.addEventListener('mouseover', function() {
    title.style.animation = "bounce 1s";
});

title.addEventListener('mouseout', function() {
    title.style.animation = "";
});

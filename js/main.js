function show() {
    document.getElementById("side-menu") .classList.toggle("show");
}

function data() {
    var span;
    var date = new Date();
    var an;

    an = date.getFullYear();

    span = document.getElementById("data");
    span.innerHTML = "Toate drepturile de autor sunt rezervate <br/>" + an;
}

data();
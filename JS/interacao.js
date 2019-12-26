window.onload = function(){
    var thorku= document.getElementById("thorku");
    thorku.onclick= mostraThorku;

    var haltar= document.getElementById("haltar");
    haltar.onclick= mostraHaltar;

    var icaro= document.getElementById("icaro");
    icaro.onclick= mostraIcaro;

    var cleo= document.getElementById("cleo");
    cleo.onclick= mostraCleo;
}

function mostraThorku(){
    document.querySelector('.mostra-thorku').style.display= 'block';
    document.querySelector('#thorku').style.display= 'none';
    document.querySelector('#haltar').style.display= 'none';
    document.querySelector('#icaro').style.display= 'none';
    document.querySelector('#cleo').style.display= 'none';
}

function mostraHaltar(){
    document.querySelector('.mostra-haltar').style.display= 'block';
    document.querySelector('#thorku').style.display= 'none';
    document.querySelector('#haltar').style.display= 'none';
    document.querySelector('#icaro').style.display= 'none';
    document.querySelector('#cleo').style.display= 'none';
}

function mostraIcaro(){
    document.querySelector('.mostra-icaro').style.display= 'block';
    document.querySelector('#thorku').style.display= 'none';
    document.querySelector('#haltar').style.display= 'none';
    document.querySelector('#icaro').style.display= 'none';
    document.querySelector('#cleo').style.display= 'none';
}

function mostraCleo(){
    document.querySelector('.mostra-cleo').style.display= 'block';
    document.querySelector('#thorku').style.display= 'none';
    document.querySelector('#haltar').style.display= 'none';
    document.querySelector('#icaro').style.display= 'none';
    document.querySelector('#cleo').style.display= 'none';

    document.querySelector('footer').style.position= 'fixed';
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#fechar-thorku').addEventListener('click', function (e){
        document.querySelector('.mostra-thorku').style.display= 'none'; 

        document.querySelector('#thorku').style.display= 'block';
        document.querySelector('#haltar').style.display= 'block';
        document.querySelector('#icaro').style.display= 'block';
        document.querySelector('#cleo').style.display= 'block';
    })
})

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#fechar-haltar').addEventListener('click', function (e){
        document.querySelector('.mostra-haltar').style.display= 'none';

        document.querySelector('#thorku').style.display= 'block';
        document.querySelector('#haltar').style.display= 'block';
        document.querySelector('#icaro').style.display= 'block';
        document.querySelector('#cleo').style.display= 'block';
    })
})

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#fechar-icaro').addEventListener('click', function (e){
        document.querySelector('.mostra-icaro').style.display= 'none';

        document.querySelector('#thorku').style.display= 'block';
        document.querySelector('#haltar').style.display= 'block';
        document.querySelector('#icaro').style.display= 'block';
        document.querySelector('#cleo').style.display= 'block';
    })
})
        
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#fechar-cleo').addEventListener('click', function (e){
        document.querySelector('.mostra-cleo').style.display= 'none';

        document.querySelector('#thorku').style.display= 'block';
        document.querySelector('#haltar').style.display= 'block';
        document.querySelector('#icaro').style.display= 'block';
        document.querySelector('#cleo').style.display= 'block';
    })
})        

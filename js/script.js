$(document).ready(function() {
    
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1"
    }).then(function(data) {
       $('.greeting-id').append(data.title);
       $('.greeting-content').append(data.completed);
    });

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1"
    }).then(function(data) {
       $('.greeting-id').append(data.title);
       $('.greeting-content').append(data.completed);
    });

// let btnLogin = document.querySelector("#btnLogin");

// btnLogin.addEventListener("click", () => {
   
//     location.href = "index-logado.html"
// })

$( "#target" ).click(function() {
    alert( "Sua compra foi realizada com sucesso");
  });
});


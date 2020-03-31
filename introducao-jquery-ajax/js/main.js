// UTILIZANDO JQUERY E AJAX---------------------------------------------------------------------------------------------

function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) { 
            console.log(response);
            //Javascript, mais volumoso
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            //JQuery, mais limpo e reduzido
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
        }
    })
}
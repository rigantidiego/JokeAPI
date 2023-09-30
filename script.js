 // Función para obtener y mostrar un chiste en español desde la API
 function obtenerChisteEspanol() {
    // URL de la API para chistes filtrados en español
    var url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?lang=es";
    
    // Realiza una solicitud GET a la API usando fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica si se obtuvo un chiste en español
            if (data.lang === "es" && data.setup) {
                // Obtiene el chiste de la respuesta JSON
                var chisteTexto = data.setup  + " " + data.delivery;
                
                // Muestra el chiste en el elemento HTML
                document.getElementById("chiste").textContent = chisteTexto;
                
            } else {
                var chisteTexto = data.joke;
                
                // Muestra el chiste en el elemento HTML
                document.getElementById("chiste").textContent = chisteTexto;
            }
        })
       };

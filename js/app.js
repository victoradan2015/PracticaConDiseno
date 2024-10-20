function cargarConfig() {
    fetch('./jsons/config.json') 
        .then(response => response.json())
        .then(data => {
            const configuraciones = data.configuraciones;
            const mensajeTitulo = configuraciones.find(config => config.clave === "TituloPag").valor;
            const mensajehome = configuraciones.find(config => config.clave === "mensaje_home").valor;
            const mensajeCammbio = configuraciones.find(config => config.clave === "mensaje_cambio").valor;
            const mensajeOperaciones = configuraciones.find(config => config.clave === "mensaje_operaciones").valor;
            const mensajeConfig = configuraciones.find(config => config.clave === "mensaje_config").valor;
            const mensajeBienvenida = configuraciones.find(config => config.clave === "mensaje_bienvenida").valor;
            const mensajehomeIcon = configuraciones.find(config => config.clave === "mensaje_home").icono;
            const mensajeCammbioIcon = configuraciones.find(config => config.clave === "mensaje_cambio").icono;
            const mensajeOperacionesIcon = configuraciones.find(config => config.clave === "mensaje_operaciones").icono;
            const mensajeConfigIcon = configuraciones.find(config => config.clave === "mensaje_config").icono;
            const logoConfig = configuraciones.find(config => config.clave === "ImagenInicio");

            document.getElementById("titulo_app").textContent = mensajeTitulo;
            document.getElementById("mensaje_bienvenida").textContent = mensajeBienvenida;
            document.querySelector(".logo").src = logoConfig.valor;
            document.getElementById("home").textContent = mensajehome;
            document.getElementById("tpcambio").textContent = mensajeCammbio;
            document.getElementById("operaciones").textContent = mensajeOperaciones;
            document.getElementById("configu").textContent = mensajeConfig;
            document.getElementById("homeIcon").className = mensajehomeIcon;
            document.getElementById("tpcambioIcon").className = mensajeCammbioIcon;
            document.getElementById("operacionesIcon").className = mensajeOperacionesIcon;
            document.getElementById("configuIcon").className = mensajeConfigIcon;
        })
        .catch(error => console.error("Error al cargar el mensaje de bienvenida:", error));
}

function cargarPagina(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            document.querySelector("#content").innerHTML = html;
            if (href === "index.php") {
                cargarConfig();
            }
        })
        .catch(error => console.error("Error al cargar la página:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    cargarConfig();
    
    const links = document.querySelectorAll("#footer-bar a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            cargarPagina(href);
        });
    });
});

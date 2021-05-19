const url = "https://jsonplaceholder.typicode.com/photos"
const lista = document.getElementById(`lista`);

const obtenerfotos = async () => {
    const response = await fetch(url);
    const fotos = await response.json();
    return fotos;
}
    
obtenerfotos()
    .then(fotos => {
    fotos.map(foto => {
        let li = document.createElement(`li`);
        li.innerHTML = `<a href="detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
        lista.appendChild(li);
        })
})
.catch(error => {
    document.getElementById("error").innerHTML = error.message;
    console.log(error); 
})
.finally(() => {
    document.getElementById(`cargando`).innerHTML = "";
    document.getElementById(`cargandoGif`).src = "";
    console.log("Proceso terminado")
})
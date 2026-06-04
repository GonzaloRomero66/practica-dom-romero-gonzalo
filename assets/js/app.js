const personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];
const nuevoarreglo = [personajes]
  
const contenedor = document.getElementById("contenedor");
function renderizar(personajes) {
    contenedor.innerHTML = "";
    for(let i = 0; i < personajes.length; i++) {
    contenedor.innerHTML += `
    <div class="col-3 my-3">
    <div class="card card-animada" style= "width: 18rem">
            <img src="${personajes[i].imagen}"
            >
            <div class="card-body">
            <h5>${personajes[i].nombre}</h5>
            <button class="btn btn-danger boton-eliminar" data-id="${personajes[i].id}">
            Eliminar
            </button>
        </div>
        </div>
    `;
}
}
 renderizar(personajes)

    contenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("boton-eliminar")){
        const id = Number(e.target.dataset.id)
        
        const indice = personajes.findIndex (
            personaje => personaje.id === id
        );
        if (indice !== -1 ){
        
        personajes.splice(indice, 1);
        renderizar(personajes); }}
    });
const formulario = document.createElement("form");

    formulario.innerHTML =`
    <input type="text" id="nombre" placeholder="Nombre"> 
    <input type="text" id="imagen" placeholder="Imagen o URL">
    <button type="submit" >Agregar</button>
    `;

    document.body.appendChild(formulario);

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value; 

    const nuevopersonaje = {
        id: personajes.length + 1,
        nombre: nombre,
        imagen: imagen
    };    
    personajes.push(nuevopersonaje);
    renderizar(personajes);
    formulario.reset();
    })
  const buscador = document.createElement("input")
    buscador.type = "text"
    buscador.placeholder = "Busca personaje"

    document.body.prepend(buscador);
    buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = personajes.filter(personaje =>
        personaje.nombre.toLowerCase().includes(texto)
    );

    renderizar(filtrados);
});



    
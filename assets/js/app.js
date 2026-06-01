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
    for(let i = 0; i < personajes.length; i++) {
    contenedor.innerHTML += `
    <div class="col-3 my-3">
    <div class="card" style= "width: 18rem">
            <img src="${personajes[i].imagen}"
            >
            <div class="card-body">
            <h5>${personajes[i].nombre}</h5>
            </button>
            <button class="btn btn-danger boton-eliminar">
            Eliminar
            </button>
        </div>
        </div>
    `;
}
}
renderizar(personajes);
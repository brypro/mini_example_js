const capturar = () => {
    console.log("Hola mundo");
  };
  
  const agregar = (a, b) => {
    return a + b;
  };
  
  const validar = (a) => {
    if (a === 1) {
      return true;
    } else {
      return false;
    }
  };
  
  const editar = (a) => {
    return a;
  };


  //objeto persona
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  genero: "Masculino",
  estado: "Soltero",
  nacionalidad: "Mexicana",
  idioma: "Español",
  capturar,
  agregar,
  validar,
  editar,
};

//salvar persona en lista de personas
const listaPersonas = [];
//recuperar lista de personas de local storage
const listaPersonasGuardada = JSON.parse(localStorage.getItem("listaPersonas"));
if (listaPersonasGuardada) {
  listaPersonas.push(...listaPersonasGuardada);
}
listaPersonas.push(persona);
//guardar lista de personas en local storage
localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas));
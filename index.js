// const capturar = () => {
//     console.log("Hola mundo");
//   };
  
//   const agregar = (a, b) => {
//     return a + b;
//   };
  
//   const validar = (a) => {
//     if (a === 1) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
//   const editar = (a) => {
//     return a;
//   };



// //objeto persona
// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 30,
//   genero: "Masculino",
//   estado: "Soltero",
//   nacionalidad: "Mexicana",
//   idioma: "Español",
//   capturar,
//   agregar,
//   validar,
//   editar,
// };

// //salvar persona en lista de personas
// const listaPersonas = [];
// //recuperar lista de personas de local storage
// const listaPersonasGuardada = JSON.parse(localStorage.getItem("listaPersonas"));
// if (listaPersonasGuardada) {
//   listaPersonas.push(...listaPersonasGuardada);
// }
// listaPersonas.push(persona);
// //guardar lista de personas en local storage
// localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas));

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const tbody = document.getElementById("tbody");
  const cancelBtn = document.getElementById("cancel-btn");

  // Limpiar formulario al dar click en el botón cancelar
  cancelBtn.addEventListener("click", () => {
    form.reset();
  });

  // Agregar persona a la tabla
  const agregarPersona = (persona) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${persona.apellidos}</td>
      <td>${persona.nombres}</td>
      <td>${persona.genero}</td>
      <td>${persona.estadoCivil}</td>
      <td>${persona.sueldo}</td>
      <td></td>
      <td></td>
    `;
    tbody.appendChild(row);
  };

  // Eliminar persona de la tabla
  const eliminarPersona = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentElement.parentElement.remove();
      }
    });
  };

  // Eliminar personas seleccionadas al dar click en el botón eliminar
  const deleteBtn = document.getElementById("btn-delete");
  deleteBtn.addEventListener("click", eliminarPersona);



  // Obtener persona del formulario 
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Objeto persona
    const persona = {
      apellidos: form.apellidos.value,
      nombres: form.nombres.value,
      genero: form.genero.value,
      estadoCivil: form.estadoCivil.value,
      sueldo: form.sueldo.value,
    };
    agregarPersona(persona);
    form.reset();
  });

  // Cargar personas desde el local storage al cargar la página
  const listaPersonas = [];
 //recuperar lista de personas de local storage
  const listaPersonasGuardada = JSON.parse(localStorage.getItem("listaPersonas"));
  if (listaPersonasGuardada) {
     listaPersonas.push(...listaPersonasGuardada);
  }
  listaPersonas.push(persona);
  //guardar lista de personas en local storage
  localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas));

});


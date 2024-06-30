document.addEventListener("DOMContentLoaded", () => {
  // Recuperar datos de localStorage o usar datos iniciales
  const storedData = localStorage.getItem("data");
  const data = storedData
    ? JSON.parse(storedData)
    : [
        {
          apellidos: "Smith",
          nombres: "John",
          genero: "Masculino",
          estadoCivil: "Soltero(a)",
          sueldo: "2500000",
        },
        {
          apellidos: "Doe",
          nombres: "Jane",
          genero: "Femenino",
          estadoCivil: "Casado(a)",
          sueldo: "2500000",
        },
        {
          apellidos: "Doe",
          nombres: "John",
          genero: "Masculino",
          estadoCivil: "Casado(a)",
          sueldo: "2500000",
        },
        {
          apellidos: "Smith",
          nombres: "Jane",
          genero: "Femenino",
          estadoCivil: "Soltero(a)",
          sueldo: "2500000",
        },
      ];

  let editIndex = null;

  // Generar la tabla con los datos iniciales
  generateTable(data);

  // Agregar un event listener al select para filtrar los datos
  document
    .getElementById("filterGenero")
    .addEventListener("change", function () {
      filterData(this.value, data);
    });

  // Manejar el submit del formulario para agregar o editar registros
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const newPerson = {
      apellidos: document.getElementById("apellidos").value,
      nombres: document.getElementById("nombres").value,
      genero: document.querySelector('input[name="genero"]:checked').value,
      estadoCivil: document.getElementById("estadoCivil").value,
      sueldo: document.getElementById("sueldo").value,
    };

    if (editIndex !== null) {
      if (
        window.confirm("¿Estás seguro de que quieres actualizar este registro?")
      ) {
        data[editIndex] = newPerson;
        editIndex = null;
        document.getElementById("form-title-text").textContent =
          "Añadir personal";
        document.getElementById("save-btn").textContent = "GUARDAR";
        document.getElementById("cancel-btn").textContent = "LIMPIAR";
        saveToLocalStorage(data);
        generateTable(data);
        this.reset();
      }
    } else {
      data.push(newPerson);
      saveToLocalStorage(data);
      generateTable(data);
      this.reset();
    }
  });

  // Event listener para el botón de limpiar / cancelar
  document.getElementById("cancel-btn").addEventListener("click", function () {
    editIndex = null;
    document.getElementById("form-title-text").textContent = "Añadir personal";
    document.getElementById("save-btn").textContent = "GUARDAR";
    this.textContent = "LIMPIAR";
    document.getElementById("form").reset();
  });

  // Función para generar la tabla
  function generateTable(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpiar cualquier contenido previo

    data.forEach((item, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.apellidos}</td>
        <td>${item.nombres}</td>
        <td>${item.genero}</td>
        <td>${item.estadoCivil}</td>
        <td>${item.sueldo}</td>
        <td>
          <button class="btn-edit" data-index="${index}">
            <i class="fa-solid fa-pen"></i>
          </button>
        </td>
        <td>
          <button class="btn-delete" data-index="${index}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;

      tableBody.appendChild(row);
    });

    document.querySelectorAll(".btn-edit").forEach((button) => {
      button.addEventListener("click", handleEdit);
    });

    document.querySelectorAll(".btn-delete").forEach((button) => {
      button.addEventListener("click", handleDelete);
    });
  }

  // Función para manejar la edición
  function handleEdit(event) {
    editIndex = event.target.closest("button").getAttribute("data-index");
    const person = data[editIndex];

    document.getElementById("apellidos").value = person.apellidos;
    document.getElementById("nombres").value = person.nombres;
    document.querySelector(
      `input[name="genero"][value="${person.genero}"]`
    ).checked = true;
    document.getElementById("estadoCivil").value = person.estadoCivil;
    document.getElementById("sueldo").value = person.sueldo;

    document.getElementById("form-title-text").textContent = "Editar personal";
    document.getElementById("save-btn").textContent = "ACTUALIZAR";
    document.getElementById("cancel-btn").textContent = "CANCELAR";
  }

  // Función para manejar la eliminación
  function handleDelete(event) {
    const index = event.target.closest("button").getAttribute("data-index");
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este registro?")
    ) {
      data.splice(index, 1);
      saveToLocalStorage(data);
      generateTable(data);
    }
  }

  // Función para filtrar los datos por género
  function filterData(genero, data) {
    if (genero === "todos") {
      generateTable(data);
    } else {
      const filteredData = data.filter((item) => item.genero === genero);
      generateTable(filteredData);
    }
  }

  // Función para guardar los datos en localStorage
  function saveToLocalStorage(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
});

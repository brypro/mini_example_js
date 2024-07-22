import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const usePersonData = () => {
  // Estados para manejar los datos y el filtro
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("todos");

  // Función para guardar datos en localStorage
  const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data)); 
  };

  // Efecto para inicializar datos desde localStorage o establecer datos iniciales
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data"));
    const initialData = [ 
      { id: 1, apellidos: "Pérez", nombres: "José", genero: "Masculino", estadoCivil: "Soltero(a)", sueldo: "2500000" },
      { id: 2, apellidos: "Gómez", nombres: "María", genero: "Femenino", estadoCivil: "Casado(a)", sueldo: "2500000" },
      { id: 3, apellidos: "Mendoza", nombres: "Roberto", genero: "Masculino", estadoCivil: "Casado(a)", sueldo: "2500000" },
      { id: 4, apellidos: "López", nombres: "Catalina", genero: "Femenino", estadoCivil: "Soltero(a)", sueldo: "2500000" }
    ];
    !storedData ? (setData(initialData), saveToLocalStorage(initialData)) : setData(storedData);
  }, []);

  // Efecto para filtrar datos según el género
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || []; 
    refreshData(storedData);
  }, [filter]);

  // Función para refrescar los datos según el filtro
  const refreshData = (data) => {
    const filteredData = filter === "todos" ? data : data.filter((person) => person.genero === filter);
    setData(filteredData);
  };

  // Función para agregar una persona
  const addPerson = (newPerson) => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const updatedData = [...storedData, { id: uuidv4(), ...newPerson }];
    setData(updatedData);
    saveToLocalStorage(updatedData);
    refreshData(updatedData);
  };

  // Función para actualizar una persona
  const updatePerson = (updatePerson) => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    const updatedData = storedData.map((person) =>
      person.id === updatePerson.id ? updatePerson : person 
    );
    setData(updatedData);
    saveToLocalStorage(updatedData);
    refreshData(updatedData);
  };

  // Función para eliminar una persona
  const deletePerson = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      const updatedData = data.filter((person) => person.id !== id);
      setData(updatedData);
      saveToLocalStorage(updatedData);
    }
  };

  return {
    data,
    addPerson,
    updatePerson,
    deletePerson,
    filter,
    setFilter
  };
};

export default usePersonData;
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const usePersonData = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("todos");

  const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  // Efecto para inicializar datos desde localStorage o establecer datos iniciales
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    const initialData = [
      { id: 1, apellidos: "Pérez", nombres: "José", genero: "Masculino", estadoCivil: "Soltero(a)", sueldo: "2500000" },
      { id: 2, apellidos: "Gómez", nombres: "María", genero: "Femenino", estadoCivil: "Casado(a)", sueldo: "2500000" },
      { id: 3, apellidos: "Mendoza", nombres: "Roberto", genero: "Masculino", estadoCivil: "Casado(a)", sueldo: "2500000" },
      { id: 4, apellidos: "López", nombres: "Catalina", genero: "Femenino", estadoCivil: "Soltero(a)", sueldo: "2500000" }
    ];
    if (!storedData) {
      setData(initialData);
      saveToLocalStorage(initialData);
    } else {
      setData(JSON.parse(storedData));
    }
  }, []);

  // Efecto para filtrar datos según el filtro aplicado
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    if (filter === "todos") {
      setData(storedData);
    } else {
      const filteredData = storedData.filter((person) => person.genero === filter);
      setData(filteredData);
    }
  }, [filter]);


  // Funciones para manipular los datos

  const addPerson = (newPerson) => {
    const updatedData = [...data, { id: uuidv4(), ...newPerson }];
    setData(updatedData);
    saveToLocalStorage(updatedData);
  };

  const updatePerson = (updatePerson) => {
    const updatedData = data.map((person) =>
      person.id === updatePerson.id ? updatePerson : person
    );
    setData(updatedData);
    saveToLocalStorage(updatedData);
  };

  const deletePerson = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      const updatedData = data.filter((person) => person.id !== id);
      setData(updatedData);
      saveToLocalStorage(updatedData);
    }
  };

  const filterData = (genero) => {
    setFilter(genero);
  };

  return {
    data,
    addPerson,
    updatePerson,
    deletePerson,
    filterData,
    filter,
    setFilter
  };
};

export default usePersonData;
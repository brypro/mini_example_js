"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Form = ({ addPerson, updatePerson, editPerson, setEditPerson }) => {
    
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    apellidos: "",
    nombres: "",
    genero: "",
    estadoCivil: "",
    sueldo: "",
  });

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    editPerson ? updatePerson({ ...editPerson, ... formData}) : addPerson(formData)
    resetForm();
  };

  // Función para resetear el formulario
  const resetForm = () => {
    setFormData({
      apellidos: "",
      nombres: "",
      genero: "",
      estadoCivil: "",
      sueldo: "",
    });
    setEditPerson(null);
  };

  // Hook para cargar los datos de la persona a editar, se ejecuta cuando se renderiza el componente y cuando cambia el valor de editPerson
  useEffect(() => {
    editPerson && setFormData({
        apellidos: editPerson.apellidos,
        nombres: editPerson.nombres,
        genero: editPerson.genero,
        estadoCivil: editPerson.estadoCivil,
        sueldo: editPerson.sueldo,
      });
  }, [editPerson]);


  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (

    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formTitle}>
        <FontAwesomeIcon icon={faUserGroup} className={styles.faUserGroup} />
        <h2 id="form-title-text">
          {editPerson ? "Editar persona" : "Añadir personal"}
        </h2>
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="apellidos">
          APELLIDOS
        </label>
        <input
          className={styles.input}
          type="text"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="nombres">
          NOMBRES
        </label>
        <input
          className={styles.input}
          type="text"
          id="nombres"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <p className={styles.label}>GÉNERO</p>
        <div className={styles.genderLabelContainer}>
          <label className={styles.input} htmlFor="femenino">
            <input
              className={styles.genderRadio}
              type="radio"
              id="femenino"
              name="genero"
              value="Femenino"
              checked={formData.genero === "Femenino"}
              onChange={handleChange}
              required
            />
            Femenino
          </label>
          <label className={styles.input} htmlFor="masculino">
            <input
              className={styles.genderRadio}
              type="radio"
              id="masculino"
              name="genero"
              value="Masculino"
              checked={formData.genero === "Masculino"}
              onChange={handleChange}
            />
            Masculino
          </label>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="estadoCivil">
          ESTADO CIVIL
        </label>
        <select
          className={`${styles.formSelect} ${styles.input}`}
          id="estadoCivil"
          name="estadoCivil"
          aria-label="Estado civil"
          value={formData.estadoCivil}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="Soltero(a)">Soltero(a)</option>
          <option value="Casado(a)">Casado(a)</option>
          <option value="Divorciado(a)">Divorciado(a)</option>
          <option value="Viudo(a)">Viudo(a)</option>
        </select>
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="sueldo">
          SUELDO
        </label>
        <input
          className={styles.input}
          type="number"
          id="sueldo"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.btnContainer}>
        <button
          className={`${styles.cancelBtn} ${styles.btn}`}
          type="reset"
          id="cancel-btn"
          onClick={resetForm}
        >
          {editPerson? "CANCELAR" : "LIMPIAR"}
        </button>
        <button
          className={`${styles.saveBtn} ${styles.btn}`}
          type="submit"
          id="save-btn"
        >
          {editPerson? "GUARDAR" : "AÑADIR"}
        </button>
      </div>
    </form>
  );
};

export default Form;

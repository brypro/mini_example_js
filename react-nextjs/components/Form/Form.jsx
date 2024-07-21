import React from "react";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
    return (
        <form id="form" className={styles.form}>
      
            <div className={styles.formTitle}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.faUserGroup}/>
                <h2 id="form-title-text">Añadir personal</h2>
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="apellidos">APELLIDOS</label>
                <input className={styles.input} type="text" id="apellidos" name="apellidos" required />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="nombres">NOMBRES</label>
                <input className={styles.input} type="text" id="nombres" name="nombres" required />
            </div>

            <div className={styles.inputContainer}>
                <p className={styles.label}>GÉNERO</p>
                <div className={styles.genderLabelContainer}>
                    <label className={styles.input} htmlFor="femenino">
                        <input className={styles.genderRadio} type="radio" id="femenino" name="genero" value="Femenino" required />
                        Femenino
                    </label>
                    <label className={styles.input} htmlFor="masculino">
                        <input className={styles.genderRadio} type="radio" id="masculino" name="genero" value="Masculino" />
                        Masculino
                    </label>
                </div>
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="estadoCivil">ESTADO CIVIL</label>
                <select className={`${styles.formSelect} ${styles.input}`} id="estadoCivil" name="estadoCivil" aria-label="Estado civil"
                    required>
                    <option value="">Seleccione</option>
                    <option value="Soltero(a)">Soltero(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viudo(a)">Viudo(a)</option>
                </select>
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="sueldo">SUELDO</label>
                <input className={styles.input} type="number" id="sueldo" name="sueldo" required />
            </div>

            <div className={styles.btnContainer}>
                <button className={`${styles.cancelBtn} ${styles.btn}`} type="reset" id="cancel-btn">
                    LIMPIAR
                </button>
                <button className={`${styles.saveBtn} ${styles.btn}`} type="submit" id="save-btn">
                    GUARDAR
                </button>
            </div>
        </form>

    );
}

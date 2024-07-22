import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data, setEditPerson, deletePerson }) => {

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>

        <thead>
          <tr>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Género</th>
            <th>E. Civil</th>
            <th>Sueldo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/* Iteración sobre el array de personas */}
          {data.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.apellidos}</td>
              <td>{persona.nombres}</td>
              <td>{persona.genero}</td>
              <td>{persona.estadoCivil}</td>
              <td>{persona.sueldo}</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => setEditPerson(persona)}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </td>
              <td>
                <button
                  className={styles.deleteBtn}
                  onClick={() => deletePerson(persona.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Table;

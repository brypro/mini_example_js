import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const TableFile = ({persona, setEditPerson, deletePerson}) => {
    const numberFormat = (value) =>
        new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP'
        }).format(value);
    return (
        <tr>
              <td>{persona.apellidos}</td>
              <td>{persona.nombres}</td>
              <td>{persona.genero}</td>
              <td>{persona.estadoCivil}</td>
              <td>{numberFormat(persona.sueldo)}</td>
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
    );
}

export default TableFile;
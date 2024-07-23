import React from "react";
import styles from "./styles.module.css";
import TableFile from "./TableFile";

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
            <TableFile key={persona.id} persona={persona} setEditPerson={setEditPerson} deletePerson={deletePerson} />
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Table;

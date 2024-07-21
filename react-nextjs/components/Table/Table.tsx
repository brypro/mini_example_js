import React from "react";
import styles from "./styles.module.css";

const Table: React.FC = () => {
    return (
        <div className={styles.tableContainer}>

        <div className={styles.filterContainer}>
            <label htmlFor="filterGenero">Filtrar por género</label>
            <select id="filterGenero">
                <option value="todos">Todos</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
        </div>

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
            <tbody id="table-body"></tbody>
        </table>

    </div>
    )
}

export default Table;
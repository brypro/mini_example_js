import React from "react";
import styles from "./styles.module.css";

const Table = ({ data, onEdit, onDelete }) => {
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
                <tbody id="table-body"></tbody>
            </table>

    </div>
    )
}

export default Table;
"use client";
import React from "react";
import styles from "./styles.module.css";


const Filter = ({ filter, setFilter, filterData }) => {
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    filterData(selectedFilter);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filterGenero">Filtrar por género</label>
      <select
        id="filterGenero"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="todos">Todos</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
    </div>
  );
};

export default Filter;

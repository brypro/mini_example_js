"use client";
import React, { useState } from "react";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Filter from "../components/Filter/Filter";
import usePersonData from "../hooks/usePersonData";

export default function Home() {
  const {
    data,
    addPerson,
    updatePerson,
    deletePerson,
    filterData,
    filter,
    setFilter,
  } = usePersonData();
  
  const [editPerson, setEditPerson] = useState(null);

  return (
    <>
      <header>
        <h1>People Manager</h1>
      </header>

      <main>
        <Form
          addPerson={addPerson}
          updatePerson={updatePerson}
          editPerson={editPerson}
          setEditPerson={setEditPerson}
        />
        <div className="container">
          <Filter
            filter={filter}
            setFilter={setFilter}
            filterData={filterData}
          />
          <Table
            data={data}
            setEditPerson={setEditPerson}
            deletePerson={deletePerson}
          />
        </div>
      </main>
    </>
  );
}

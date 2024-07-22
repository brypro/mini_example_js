"use client";
import React, { useState } from "react";
import { Nunito } from "next/font/google";
import "./globals.css";
import "../fontawesome";

import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Filter from "../components/Filter/Filter";
import usePersonData from "../hooks/usePersonData";

const openSans = Nunito({
  subsets: ["latin"],
});

export default function RootLayout() {
  const {
    data,
    addPerson,
    updatePerson,
    deletePerson,
    filter,
    setFilter,
  } = usePersonData();

  const [editPerson, setEditPerson] = useState(null);

  return (
    <html lang="en">
      <body className={openSans.className}>

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
            />
            <Table
              data={data}
              setEditPerson={setEditPerson}
              deletePerson={deletePerson}
            />
          </div>

        </main>

      </body>
    </html>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";


const PersonList: React.FC<{ people: any[], deletePerson: (index: number) => void }> = ({ people, deletePerson }) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Apellidos</TableHead>
          <TableHead>Nombres</TableHead>
          <TableHead>Género</TableHead>
          <TableHead>Estado Civil</TableHead>
          <TableHead>Sueldo</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((person, index) => (
          <TableRow key={index}>
            <TableCell>{person.lastName}</TableCell>
            <TableCell>{person.firstName}</TableCell>
            <TableCell>{person.gender}</TableCell>
            <TableCell>{person.maritalStatus}</TableCell>
            <TableCell>{person.salary}</TableCell>
            <TableCell>
              <Button onClick={() => deletePerson(index)} color="danger">Eliminar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PersonList;

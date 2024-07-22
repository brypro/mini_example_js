/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import AddPersonForm from '@/components/AddPersonForm';
import PersonList from '@/components/PersonList';

const App: React.FC = () => {
  const [people, setPeople] = useState<any[]>([]);

  const addPerson = (person: any) => {
    setPeople([...people, person]);
  };

  const deletePerson = (index: number) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">People Manager</h1>
      <AddPersonForm addPerson={addPerson} />
      <PersonList people={people} deletePerson={deletePerson} />
    </div>
  );
};

export default App;

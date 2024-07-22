/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Select, SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent } from "@/components/ui/select";


const AddPersonForm: React.FC<{ addPerson: (person: any) => void }> = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    gender: 'Femenino',
    maritalStatus: '',
    salary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPerson(formData);
    setFormData({
      lastName: '',
      firstName: '',
      gender: 'Femenino',
      maritalStatus: '',
      salary: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-md border border-gray-200 rounded">
      <Input
        placeholder="Apellidos"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="mb-4"
      />
      <Input
        placeholder="Nombres"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="mb-4"
      />
      <RadioGroup defaultValue="Femenino" name="gender" value={formData.gender} onChange={handleChange as any} className="mb-4 flex">
        <div className="flex items-center space-x-2">
        <RadioGroupItem value="Femenino" className="mr-4" id="gender1"><label htmlFor='gender1'>Femenino</label></RadioGroupItem>
        </div>
        <div className="flex items-center space-x-2">
        <RadioGroupItem value="Masculino" className='mr-4' id="gender2"><label htmlFor='gender2'>Masculino</label></RadioGroupItem>
        </div>
      </RadioGroup>
      <Select
      name="maritalStatus"
      value={formData.maritalStatus}
      onValueChange={field.onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Estado Civil" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Soltero(a)">Soltero(a)</SelectItem>
            <SelectItem value="Casado(a)">Casado(a)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        placeholder="Sueldo"
        name="salary"
        type="number"
        value={formData.salary}
        onChange={handleChange}
        className="mb-4"
      />
      <div className="flex space-x-4">
        <Button type="reset" onClick={() => setFormData({ lastName: '', firstName: '', gender: 'Femenino', maritalStatus: '', salary: '' })}>
          Limpiar
        </Button>
        <Button type="submit" color="primary">Añadir</Button>
      </div>
    </form>
  );
};

export default AddPersonForm;

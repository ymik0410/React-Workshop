import React from 'react';
import './style.css';
import Header from './Header.js';
import Table from './Table.js';
import FormAddPet from './formAddPet.js';

export default function App() {
  const initialPetList = [
    {
      name: 'Chico',
      type: 'dog'
    },
    {
      name: 'Felix',
      type: 'cat'
    },
    {
      name: 'Betty',
      type: 'chicken'
    },
    {
      name: 'Chango',
      type: 'monkey'
    }
  ];

  const [pets, setPets] = React.useState(initialPetList);
  const [inputValueName, setInputValueName] = React.useState('');
  const [inputValueType, setInputValueType] = React.useState('');

  function handleRemove(index) {
    const newPetList = pets.filter((pet, i) => i != index);
    setPets(newPetList);
  }

  const petTableHeader1 = 'My Pet Name';
  const petTableHeader2 = 'Pet Type';

  const handleAdd = () => {
    const newPet = { name: inputValueName, type: inputValueType };

    const newPets = [...pets, newPet];

    setPets(newPets);
    setInputValueName('');
    setInputValueType('');
  };

  return (
    <div>
      <Header />
      <Table
        tableData={pets}
        tableHeader1={petTableHeader1}
        tableHeader2={petTableHeader2}
        onRemove={handleRemove}
      />
      <FormAddPet
        inputValueName={inputValueName}
        inputValueType={inputValueType}
        setInputValueName={setInputValueName}
        setInputValueType={setInputValueType}
        handleAdd={handleAdd}
      />
    </div>
  );
}

// import { Route, Routes } from 'react-router-dom';

import React, { useState } from 'react';
import { AppWrapper, AppForm, AppLabel, AppInput, AppButton, AppResult } from './App.styled';



const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  const [weight, setWeight] = useState('');
  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState('');

  const handleCalculate = () => {
    const weightValue = parseFloat(weight);
    const distanceValue = parseFloat(distance);

    if (isNaN(weightValue) || isNaN(distanceValue) || weightValue <= 0 || distanceValue <= 0) {
      alert('Будь ласка, введіть дійсні значення для ваги та відстані.');
      return;
    }

    // Простий розрахунок вартості для прикладу
    const calculatedCost = weightValue * 0.5 + distanceValue * 0.1;
    setCost(calculatedCost.toFixed(2));
  };

  return (
    <AppWrapper>
      <h1>Калькулятор вартості доставки</h1>      
      <AppForm>
        <AppLabel>
          Вага посилки (кг):
          <AppInput type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </AppLabel>
        <AppLabel>
          Відстань (км):
          <AppInput type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
        </AppLabel>
        <AppButton type="button" onClick={handleCalculate}>Розрахувати вартість доставки</AppButton>
      </AppForm>
      {cost && <AppResult >Вартість доставки: {cost} грн</AppResult>}
    </AppWrapper>
  );
}

export default App;

import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura) / 100;
    const pesoEmKg = parseFloat(peso);

    if (!alturaEmMetros || !pesoEmKg) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const imc = (pesoEmKg / (alturaEmMetros ** 2)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc >= 18.5 && imc < 24.9) classificacao = 'Peso normal';
    else if (imc >= 25 && imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc >= 30 && imc < 34.9) classificacao = 'Obesidade grau 1';
    else if (imc >= 35 && imc < 39.9) classificacao = 'Obesidade grau 2';
    else classificacao = 'Obesidade grau 3';

    setResultado(`IMC: ${imc} - ${classificacao}`);
  };

  const resetarFormulario = () => {
    setAltura('');
    setPeso('');
    setResultado(null);
  };

  return (
    <div className="form">
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ex: 170"
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ex: 70"
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      <button className="reset-btn" onClick={resetarFormulario}>Resetar</button>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default Form;

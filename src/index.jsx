import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Opcional: adicione estilos globais
import App from './App';
import reportWebVitals from './reportWebVitals'; // Se você deseja medir desempenho

// Renderiza o componente App no DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configuração opcional para monitoramento de desempenho
reportWebVitals();

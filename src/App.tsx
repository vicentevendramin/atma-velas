import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage } from './pages';
import { getPedidos } from './services/localStorareService';
import './App.css'

const App = () => {
  useEffect(() => {}, []);
  // adicionarPedido(1, 'Cliente A', '2024-05-03', 100.50, 'Em andamento');
  // adicionarPedido(2, 'Cliente B', '2024-05-02', 75.20, 'Concluído');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        {getPedidos().map(pedido => (
          <Route key={pedido.id_pedido} path={`/pedido/${pedido.id_pedido}`} element={<OrdersPage />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;

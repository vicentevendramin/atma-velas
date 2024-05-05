import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage, OrderInfo, NewOrder } from './pages';
import { getPedidos, IPedido } from './services/localStorareService';
import './App.css'

const App = () => {
    // const velasPedido1 = [
    //   { tipo_vela: 'Cônica', aroma_vela: 'Lavanda', cor_vela: 'Roxo', preco_vela: 10.99, quantidade: 1 },
    //   { tipo_vela: 'Cilíndrica', aroma_vela: 'Baunilha', cor_vela: 'Branco', preco_vela: 12.99, quantidade: 1 }
    // ];

    // adicionarPedido(1, 'Cliente A', '2024-05-03', 100.50, 'Em andamento', velasPedido1);
  const localStorageOrders = getPedidos();
  const [pedidos, setPedidos] = useState(localStorageOrders);
  const [lastOrderId, setLastOrderId] = useState(0);

  useEffect(() => {
    const updatedLSOrders = getPedidos();
    setPedidos(updatedLSOrders);
    const lastOrder = pedidos[pedidos.length - 1];
    if (pedidos.length > 0) {
      setLastOrderId(lastOrder.id_pedido + 1);
    } else {
      setLastOrderId(1);
    }
  }, [pedidos]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        {pedidos.map((pedido: IPedido) => (
          <Route
            key={pedido.id_pedido}
            path={`/pedido/${pedido.id_pedido}`}
            element={<OrderInfo order={pedido} />}
          />
        ))}
        <Route path="/novo-pedido" element={<NewOrder orderId={lastOrderId} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

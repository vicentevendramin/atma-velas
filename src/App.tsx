import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage, OrderInfo } from './pages';
import { getPedidos, IPedido, adicionarPedido } from './services/localStorareService';
import './App.css'

const App = () => {
    // const velasPedido1 = [
    //   { tipo_vela: 'Cônica', aroma_vela: 'Lavanda', cor_vela: 'Roxo', preco_vela: 10.99, quantidade: 1 },
    //   { tipo_vela: 'Cilíndrica', aroma_vela: 'Baunilha', cor_vela: 'Branco', preco_vela: 12.99, quantidade: 1 }
    // ];

    // adicionarPedido(1, 'Cliente A', '2024-05-03', 100.50, 'Em andamento', velasPedido1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        {getPedidos().map((pedido: IPedido) => (
          <Route
            key={pedido.id_pedido}
            path={`/pedido/${pedido.id_pedido}`}
            element={<OrderInfo order={pedido} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;

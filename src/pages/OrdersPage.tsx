import { styled } from 'styled-components';
import { Header, Order } from '../components';
import { getPedidos } from '../services/localStorareService';

const MainContainer = styled.div`
  background-color: #f5f5f5f5;
  margin-top: 4rem;
`;

// const TopContainer = styled.div`
  
// `;

const OrdersTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
`;

const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`;

export const OrdersPage = () => {
  const orders = getPedidos().map(pedido => (
    <Order
      key={pedido.id_pedido}
      id_pedido={pedido.id_pedido}
      cliente={pedido.cliente}
      data={pedido.data}
      total_pedido={pedido.total_pedido}
      status_pedido={pedido.status_pedido}
    />
  ));

  const ordersValidation = orders.length > 0 ? orders : 'Sem pedidos';

  return (
    <>
      <Header />
      <MainContainer>
        <OrdersTitle>Gestão de Pedidos</OrdersTitle>
        <OrdersContainer>
          {ordersValidation}
        </OrdersContainer>
      </MainContainer>
    </>
  );
};

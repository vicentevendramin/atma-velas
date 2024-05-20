import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header, Order } from '../components';
import { getPedidos } from '../services/localStorareService';

const MainContainer = styled.div`
  background-color: #f5f5f5f5;
  margin-top: 4rem;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AddOrderBtn = styled.button`
  width: 20%;
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 1rem;
  
  &:hover {
    cursor: pointer;
  }
`;

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
  const navigate = useNavigate();

  const localStorageOrders = getPedidos();
  const [orders, setOrders] = useState(localStorageOrders);

  useEffect(() => {
    const updatedLSOrders = getPedidos();
    setOrders(updatedLSOrders);
  }, []);

  const renderOrders = orders.map(pedido => (
    <Order
      key={pedido.id_pedido}
      id_pedido={pedido.id_pedido}
      cliente={pedido.cliente}
      data={pedido.data}
      total_pedido={pedido.total_pedido}
      status_pedido={pedido.status_pedido}
    />
  ));

  const ordersValidation = orders.length > 0 ? renderOrders : 'Sem pedidos';

  return (
    <>
      <Header />
      <MainContainer>
        <TopContainer>
          <OrdersTitle>Gestão de Pedidos</OrdersTitle>
          <AddOrderBtn onClick={() => navigate('/atma-velas/novo-pedido')}>Novo Pedido</AddOrderBtn>
        </TopContainer>
        <OrdersContainer>
          {ordersValidation}
        </OrdersContainer>
      </MainContainer>
    </>
  );
};

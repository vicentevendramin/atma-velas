import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MainContainer = styled.div`
  width: 18rem;
  background-color: #c8c8c8c8;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1%;
`;

const AsideContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AsiceLeft = styled.div`
  width: 70%;
`;

const AsideRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Status = styled.div`
  width: 100%;
  text-align: right;
`;

export const Order = (props: {
  id_pedido: number;
  cliente: string;
  data: string;
  total_pedido: number;
  status_pedido: string;
}) => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Status>Status: {props.status_pedido}</Status>
      <AsideContainer>
        <AsiceLeft>
          <div>Pedido: {props.id_pedido}</div>
          <div>Cliente: {props.cliente}</div>
          <div>Data: {props.data}</div>
          <div>Total: R${props.total_pedido.toFixed(2)}</div>
        </AsiceLeft>
        <AsideRight>
          <button
            style={{ height: '2rem' }}
            onClick={() => navigate(`/pedido/${props.id_pedido}`)}
          >
            Editar
          </button>
        </AsideRight>
      </AsideContainer>
    </MainContainer>
  )
};

import { styled } from 'styled-components';
import { Header } from '../components';

const MainContainer = styled.div`
  background-color: #f5f5f5f5;
  margin-top: 4rem;
`;

const OrdersTitle = styled.h2`
  font-size: 1.5rem;
  padding: 1rem;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const OrderSection = styled.div`
  width: 47%;
  background-color: #c8c8c8c8;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
`;

const InputsContainer = styled.div`
  padding: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const OrderInfo = (props: { order: {
  id_pedido: number;
  cliente: string;
  data: string;
  total_pedido: number;
  status_pedido: string;
  velas: {
    nome_vela: string;
    tipo_vela: string;
    aroma_vela: string;
    cor_vela: string;
    preco_vela: number;
    quantidade: number;
  }
}}) => {
  const pedido = props.order;
  console.log(pedido);

  return (
    <>
      <Header />
      <MainContainer>
        <OrdersTitle>Pedido #{pedido.id_pedido}</OrdersTitle>
        <TopContainer>
          <OrderSection>
            <SectionTitle>Dados do comprador</SectionTitle>
            <InputsContainer>
              <div>
                Nome: <input type="text" value="" />
              </div>
            </InputsContainer>
          </OrderSection>
          <OrderSection>
            <ButtonsContainer>
              <button style={{ width: '40%' }}>Salvar pedido</button>
              <button style={{ width: '40%' }}>Excluir pedido</button>
            </ButtonsContainer>
          </OrderSection>
        </TopContainer>
        <OrdersContainer>
          <div>{pedido.id_pedido}</div>
          <div>test</div>
        </OrdersContainer>
      </MainContainer>
    </>
  );
};

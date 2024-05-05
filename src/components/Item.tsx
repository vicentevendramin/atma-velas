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
`;

export const Item = (props: {
  tipo_vela: string;
  aroma_vela: string;
  cor_vela: string;
  preco_vela: number;
  quantidade: number;
  index: number;
  handleRemove: (index: number) => void;
}) => (
  <MainContainer>
    <Status>Tipo: {props.tipo_vela}</Status>
    <AsideContainer>
      <AsiceLeft>
        <div>Aroma: {props.aroma_vela}</div>
        <div>Cor: {props.cor_vela}</div>
        <div>Quantidade: {props.quantidade}</div>
        <div>Valor: R${props.preco_vela.toFixed(2)}</div>
      </AsiceLeft>
      <AsideRight>
        <button
          style={{ height: '2rem' }}
          onClick={() => props.handleRemove(props.index)}
        >
          Remover
        </button>
      </AsideRight>
    </AsideContainer>
  </MainContainer>
)

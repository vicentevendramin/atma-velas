import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header, Item } from '../components';
import {
  IPedido,
  IVela,
  editarPedido,
  removerPedido,
  adicionarPedido
} from '../services/localStorareService';

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
  width: 69%;
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
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c8c8c8c8;
`;

const OrdersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SaveBtn = styled.button`
  width: 90%;
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  
  &:hover {
    cursor: pointer;
  }
`;

const DeleteBtn = styled.button`
  width: 90%;
  background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  
  &:hover {
    cursor: pointer;
  }
`;

const OrderInputs = styled.div`
  width: 96%;
  background-color: #c8c8c8c8;
`;

export const OrderInfo = (props: { order: IPedido; newOrder?: boolean }) => {
  const navigate = useNavigate();

  const pedido = props.order;

  const statusCompra = ['Em andamento', 'Pedido entregue', 'Cancelada'];
  const tiposVela = ['Quadrada', 'Redonda'];
  const aromas = ['Bamboo', 'Baunilha', 'Capim', 'Canela', 'Lavanda', 'Limão', 'Pimenta rosa'];
  const cores = ['Amarelo', 'Azul', 'Vermelho', 'Marrom', 'Roxo'];

  const [nomeComprador, setNomeComprador] = useState(pedido.cliente);
  const [orderStatus, setOrderStatus] = useState(pedido.status_pedido);
  const [tipoVela, setTipoVela] = useState(tiposVela[0]);
  const [corVela, setCorVela] = useState(cores[0]);
  const [aromaVela, setAromaVela] = useState(aromas[0]);
  const [valorVela, setValorVela] = useState(0);
  
  const [produtos, setProdutos] = useState<IVela[]>(pedido.velas);

  const handleAddVela = () => {
    const newProduto = {
      tipo_vela: tipoVela,
      aroma_vela: aromaVela,
      cor_vela: corVela,
      preco_vela: valorVela,
      quantidade: 1,
    };

    setProdutos(prevState => [...prevState, newProduto]);
  };

  const handleSaveOrder = () => {
    const novosDados = {
      id_pedido: pedido.id_pedido,
      cliente: nomeComprador,
      data: pedido.data,
      total_pedido: calcularTotal(),
      status_pedido: orderStatus,
      velas: produtos,
    }
    if (props.newOrder) {
      adicionarPedido(
        novosDados.id_pedido,
        novosDados.cliente,
        novosDados.data,
        novosDados.total_pedido,
        novosDados.status_pedido,
        novosDados.velas);
    } else {
      editarPedido(pedido.id_pedido, novosDados);
    }
    navigate('/');
  };

  const calcularTotal = (): number => {
    const total = produtos.reduce((acc, produto) => acc + produto.preco_vela, 0);
    return total;
  };

  const handleDeleteOrder = () => {
    if (!props.newOrder) removerPedido(pedido.id_pedido);
    navigate('/');
  };

  const handleRemove = (index: number) => {
    const newProdutos = produtos.filter((_p, i) => i !== index);
    setProdutos(newProdutos);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <OrdersTitle>Pedido #{pedido.id_pedido}</OrdersTitle>
        <TopContainer>
          <OrderSection>
            <SectionTitle>Dados da compra</SectionTitle>
            <InputsContainer>
              <div>
                Nome comprador: <input type="text" value={nomeComprador} onChange={(e) => setNomeComprador(e.target.value)} />
              </div>
            </InputsContainer>
            <InputsContainer>
                <label>Status da compra: </label>
                <select value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                  {statusCompra.map((status, i) => 
                    <option key={`${i}-${status}`} value={status}>{status}</option>)}
                </select>
              </InputsContainer>
          </OrderSection>
          <ButtonsContainer>
            <SaveBtn onClick={handleSaveOrder}>Salvar pedido</SaveBtn>
            <DeleteBtn onClick={handleDeleteOrder}>Excluir pedido</DeleteBtn>
          </ButtonsContainer>
        </TopContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <OrderInputs>
            <div style={{ display: 'flex' }}>
              {/* Tipo vela */}
              <InputsContainer>
                <label>Tipo vela: </label>
                <select value={tipoVela} onChange={(e) => setTipoVela(e.target.value)}>
                  {tiposVela.map((tipo, i) => 
                    <option key={`${i}-${tipo}`} value={tipo}>{tipo}</option>)}
                </select>
              </InputsContainer>
              {/* Aroma vela */}
              <InputsContainer>
                <label>Aroma: </label>
                <select value={aromaVela} onChange={(e) => setAromaVela(e.target.value)}>
                  {aromas.map((aroma, i) => <option key={`${i}-${aroma}`} value={aroma}>{aroma}</option>)}
                </select>
              </InputsContainer>
              {/* Cor vela */}
              <InputsContainer>
                <label>Cor: </label>
                <select value={corVela} onChange={(e) => setCorVela(e.target.value)}>
                  {cores.map((cor, i) => <option key={`${i}-${cor}`} value={cor}>{cor}</option>)}
                </select>
              </InputsContainer>
              {/* Quantidade vela */}
              <InputsContainer>
                <div>
                  Valor:
                  <input
                    type="number"
                    value={valorVela}
                    onChange={(e) => setValorVela(Number(e.target.value))}
                    style={{ width: '3rem', marginLeft: '5px' }}
                  />
                </div>
              </InputsContainer>
              <InputsContainer>
                <button onClick={handleAddVela}>Adicionar vela</button>
              </InputsContainer>
            </div>
          </OrderInputs>
        </div>
        <OrdersContainer>
          {produtos.map((produto, i) => 
            <Item {...produto} index={i} handleRemove={handleRemove} key={`${produto.aroma_vela}-${i}`} />)}
        </OrdersContainer>
      </MainContainer>
    </>
  );
};

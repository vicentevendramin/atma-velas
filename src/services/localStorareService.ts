interface Vela {
  nome_vela: string;
  tipo_vela: string;
  aroma_vela: string;
  cor_vela: string;
  preco_vela: number;
  quantidade: number;
}

interface Pedido {
  id_pedido: number;
  cliente: string;
  data: string;
  total_pedido: number;
  status_pedido: string;
  velas: Vela[]; // Adicionando o array de objetos de vela
}

function adicionarPedido(idPedido: number, cliente: string, data: string, totalPedido: number, statusPedido: string, velas: Vela[]): void {
  // Verifica se já existem pedidos no localStorage
  let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  // Cria um novo objeto de pedido
  const novoPedido: Pedido = {
      id_pedido: idPedido,
      cliente: cliente,
      data: data,
      total_pedido: totalPedido,
      status_pedido: statusPedido,
      velas: velas // Atribuindo o array de velas ao novo pedido
  };

  // Adiciona o novo pedido à lista de pedidos
  pedidos.push(novoPedido);

  // Salva a lista atualizada de pedidos no localStorage
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function removerPedido(idPedido: number): void {
  // Obtém a lista de pedidos do localStorage
  let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  // Filtra os pedidos, removendo o pedido com o ID fornecido
  pedidos = pedidos.filter(pedido => pedido.id_pedido !== idPedido);

  // Atualiza a lista de pedidos no localStorage
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function editarPedido(idPedido: number, novosDados: Partial<Pedido>): void {
  // Obtém a lista de pedidos do localStorage
  let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  // Encontra o pedido com o ID fornecido na lista de pedidos
  const pedidoIndex: number = pedidos.findIndex(pedido => pedido.id_pedido === idPedido);

  // Se o pedido existir, atualiza seus dados com os novos dados fornecidos
  if (pedidoIndex !== -1) {
      pedidos[pedidoIndex] = { ...pedidos[pedidoIndex], ...novosDados };

      // Atualiza a lista de pedidos no localStorage
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }
}

function getPedidos(): Pedido[] {
  // Obtém a lista de pedidos do localStorage
  return JSON.parse(localStorage.getItem('pedidos') || '[]');
}

export { adicionarPedido, removerPedido, editarPedido, getPedidos };

// Exemplo de uso das funções
// const velasPedido1: Vela[] = [
//   { nome_vela: 'Vela A', tipo_vela: 'Cônica', aroma_vela: 'Lavanda', cor_vela: 'Roxo', preco_vela: 10.99 },
//   { nome_vela: 'Vela B', tipo_vela: 'Cilíndrica', aroma_vela: 'Baunilha', cor_vela: 'Branco', preco_vela: 12.99 }
// ];

// adicionarPedido(1, 'Cliente A', '2024-05-03', 100.50, 'Em andamento', velasPedido1);



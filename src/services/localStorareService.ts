interface Pedido {
  id_pedido: number;
  cliente: string;
  data: string;
  total_pedido: number;
  status_pedido: string;
}

// Função para adicionar um novo pedido ao localStorage
function adicionarPedido(idPedido: number, cliente: string, data: string, totalPedido: number, statusPedido: string): void {
  // Verifica se já existem pedidos no localStorage
  let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  // Cria um novo objeto de pedido
  const novoPedido: Pedido = {
      id_pedido: idPedido,
      cliente: cliente,
      data: data,
      total_pedido: totalPedido,
      status_pedido: statusPedido
  };

  // Adiciona o novo pedido à lista de pedidos
  pedidos.push(novoPedido);

  // Salva a lista atualizada de pedidos no localStorage
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

// Função para remover um pedido do localStorage com base no ID do pedido
function removerPedido(idPedido: number): void {
  // Obtém a lista de pedidos do localStorage
  let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos') || '[]');

  // Filtra os pedidos, removendo o pedido com o ID fornecido
  pedidos = pedidos.filter(pedido => pedido.id_pedido !== idPedido);

  // Atualiza a lista de pedidos no localStorage
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

// Função para editar um pedido no localStorage com base no ID do pedido
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
// adicionarPedido(1, 'Cliente A', '2024-05-03', 100.50, 'Em andamento');
// adicionarPedido(2, 'Cliente B', '2024-05-02', 75.20, 'Concluído');

// removerPedido(1);

// editarPedido(2, { total_pedido: 90.00, status_pedido: 'Entregue' });

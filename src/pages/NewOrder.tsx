import { OrderInfo } from './OrderInfo';

export const NewOrder = (props: { orderId: number }) => {
  const actualDate = new Date();
  const day = actualDate.getDate();
  const month = actualDate.getMonth();
  const year = actualDate.getFullYear();

  const newOrder = {
    id_pedido: props.orderId,
    cliente: '',
    data: `${day}/${month}/${year}`,
    total_pedido: 0,
    status_pedido: 'Em andamento',
    velas: [],
  }

  return <OrderInfo order={newOrder} newOrder />;
};

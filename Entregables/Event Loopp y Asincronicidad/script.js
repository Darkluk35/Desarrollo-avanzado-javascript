const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Contador para pedidos únicos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Agrega el pedido visualmente a la lista
function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

// Actualiza el estado del pedido en la interfaz
function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Simula la preparación asincrónica del pedido
async function processOrder(order) {
    const preparationTime = Math.floor(Math.random() * 3000) + 2000; // Entre 2 y 5 segundos

    await new Promise(resolve => setTimeout(resolve, preparationTime));

    updateOrderStatus(order, 'Completado');
}

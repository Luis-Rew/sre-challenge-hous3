import { loadConfig } from './settings.js';

const datasets = {
  orders: [
    { id: 'ord_1001', status: 'processed', customerId: 'cust_01', total: 87.4 },
    { id: 'ord_1002', status: 'pending', customerId: 'cust_02', total: 120.9 },
    { id: 'ord_1003', status: 'failed', customerId: 'cust_03', total: 54.1 },
  ],
  payments: [
    { id: 'pay_2001', orderId: 'ord_1001', amount: 87.4, currency: 'BRL', status: 'approved' },
    { id: 'pay_2002', orderId: 'ord_1003', amount: 54.1, currency: 'BRL', status: 'chargeback' },
  ],
} as const;

export async function simulateLatency<T extends keyof typeof datasets>(dataset: T) {
  const { artificialLatencyMs } = loadConfig();
  const latency = artificialLatencyMs + Math.floor(Math.random() * artificialLatencyMs);

  await new Promise((resolve) => setTimeout(resolve, latency));

  return [...datasets[dataset]];
}


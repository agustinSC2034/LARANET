// Fixtures only. No API client, authentication provider or payment gateway.
export const customer = {
  name: 'Cliente Demo', email: 'cliente@example.invalid', phone: '',
  address: 'Calle de Ejemplo 100', city: 'Ciudad de Ejemplo', plan: 'Fibra 300 Mbps',
  products: null,
  serviceStatus: 'Activo', connectionState: 'online', equipmentState: 'online', network: 'LARANET_Hogar',
};
export const servicePresentation = { known: false, items: [] };
export const commercialOffers = [];
export const invoices = [
  { id: '2026-09', period: 'Septiembre 2026', amount: 12500, due: '20/09/2026', status: 'Pendiente', paidAt: null },
  { id: '2026-08', period: 'Agosto 2026', amount: 11900, due: '20/08/2026', status: 'Pagada', paidAt: '18/08/2026' },
  { id: '2026-07', period: 'Julio 2026', amount: 11900, due: '20/07/2026', status: 'Pagada', paidAt: '17/07/2026' },
];
export const ticket = {
  id: 'DEMO-1042', title: 'Intermitencias de Wi-Fi', status: 'En revisión',
  opened: '15/09/2026', updated: '16/09/2026',
};
export const money = value => '$' + new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(value);
export const debt = invoices.filter(item => item.status !== 'Pagada').reduce((sum, item) => sum + item.amount, 0);

# Validación real pendiente

No se hicieron consultas de clientes ni escrituras reales en esta implementación.

1. Infraestructura: endpoint Phantom HTTPS con certificado válido, reachability desde hosting, PHP 8.2+ curl/json/dom/libxml/openssl, config/runtime privados persistentes.
2. Elegir contrato activo simple: revisar estructura, campo ID, tipos exactos y presencia de Autogestion_User/Pass con inspect-customer.php. No imprimir valores de claves.
3. Elegir multicontrato: inspect-services.php; comprobar Cuit/documento/Conexiones_Asociadas, autorizaciones y cambio de selección.
4. Activo online/offline y suspendido: inspect-service-features.php, confrontar Estado_Servicio y conectividad sin inventar causa.
5. Cuenta al día/impaga: inspect-invoices.php y inspect-invoice-document.php. Probar paginación, IDT, PDF, MIME/tamaño/pertenencia.
6. Movimientos: login CRM separado, comprobante protegido, indisponibilidad honesta al seleccionar otro contrato.
7. Productos: inspect-service-catalog.php, máximo tres contratos autorizados. Confirmar campos, aliases exactos y reglas. null != [].
8. Equipos: al menos un equipo por modelo y banda; leer primero, certificar cambios solo con autorización específica posterior.
9. SIRO: cliente de laboratorio elegido, convenio propio, CPE real, rango reservado, retorno HTTPS; después ensayo autorizado. Nunca usar el bearer/hash anterior como nueva sesión.
10. Posting: inspector CRM read-only y preflight antes de habilitar; confirmar originante y cuenta.
11. Central: proporcionar channel-key LARANET y verificar apertura/cierre/prefill sin enviar mensajes automáticamente.
12. SOAP: URL y perfiles solo lectura; sin writer de upgrade.

Clientes requeridos: activo simple, multicontrato, suspendido, factura impaga, adicionales, ONU de cada modelo, dual-band y laboratorio SIRO. No enumerar masivamente clientes.

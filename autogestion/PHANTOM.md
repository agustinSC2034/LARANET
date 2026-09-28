# Phantom LARANET

La integración histórica recibida usa HTTP puerto 5594. No se degrada TLS: la configuración en modo phantom requiere HTTPS y cURL verifica CA/hostname. Una prueba sin credenciales de HTTPS en el puerto indicado agotó el tiempo de espera; no demuestra disponibilidad desde el hosting.

Botmaker identifica ID, Cuit, Direccion, Dir_Numero y Estado_Servicio. Validar con inspect-customer.php un contrato elegido antes de fijar customer_id_field=ID. IDAx no es fallback autorizado. No trim ni coerción de passwords, no DNI como clave.

Lecturas: Consulta_Cliente_Avanzada, Recuperar_IDA_Doc, Phantom_Mi_Estado_Cuenta, Phantom_Ultima_Factura y lecturas FTTH autorizadas. Conservar el contrato exacto de la referencia; inspectores enumeran estructura/metadatos, no passwords. Si falla asociación, se limita a lo autenticado; el navegador nunca amplía permisos con IDA.

Saldo viene de Balance del estado de cuenta. Estado administrativo y conexión son independientes. No inferir suspensión por deuda.

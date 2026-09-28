# SIRO LARANET

Portado Siro.php, Payments.php y pruebas de confirmación/idempotencia. Cuenta propia en config privada. Los datos suministrados prueban que el flujo web devuelve Url/Hash y usa IdReferenciaOperacion con IDT;importe;. CPE viene de la factura Phantom, nunca del navegador. company_number permite rechazar una factura de otro convenio.

El ejemplo de base de deuda devuelve 405 al confirmar con GET. Este portal no publica bases de deuda ni utiliza esa confirmación. No se cambia el método por intuición: la integración usa /api/Pago, /api/Pago/Consulta y consulta del resultado, como la implementación fuente.

El navegador retorna a api.php?route=payment-return&attempt=…&result=ok|error. Eso solo navega a facturas; jamás confirma un pago. El servidor consulta SIRO y verifica referencia, comprobante, CPE, importe y estado PROCESADA/PagoExitoso.

Locks y reserva durable antes del POST; resultados ambiguos quedan UNCONFIRMED; sin retry ciego ni doble posting. Configurar un IDA de laboratorio y rango de cinco dígitos reservado fuera de las secuencias Phantom/Botmaker. No deducir el rango del comprobante de muestra. return_base usa mi.laranet.com.ar, no el retorno de ejemplo a Phantom.

Inicialmente enabled=false. No se ejecutó intención, pago, base de deuda ni imputación real durante el port. Credenciales guardadas aparte; no faltan esas contraseñas, sí validaciones y rango.

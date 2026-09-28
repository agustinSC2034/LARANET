# Mi LARANET

Portal ligero HTML/JavaScript nativo + PHP 8.2+, portado íntegramente desde la revisión indicada en PORT-ORIGIN.md. API física api.php?route=…; funciona en la raíz del subdominio o bajo /autogestion/. No necesita rewrite para la API.

## Desarrollo

- npm install
- npm run build:mi-laranet: genera assets/app.css con Tailwind 3.4.19.
- npm run dev:mi-laranet: demo estática en http://127.0.0.1:4183/autogestion/.
- npm run dev:mi-laranet:php: demo PHP con sesión en http://127.0.0.1:4184/autogestion/.
- npm run test:mi-laranet: suite aislada, solo mocks/fixtures, sin servicios reales.
- npm run check:mi-laranet: entorno/configuración y secretos, sin red.
- npm run lint:mi-laranet: sintaxis PHP/JS.
- npm run package:mi-laranet: paquete de despliegue sin tests, secretos ni documentación.

PHP debe estar en PATH o definir MI_LARANET_PHP con su ruta. Demo: usuario cliente.demo y contraseña laranet-demo. Datos deliberadamente ficticios; no representa cuentas reales. El modo demo se permite por defecto únicamente en CLI/servidor local; en hosting exige configuración privada explícita.

## Estado

Implementados: login exacto, sesión, CSRF, límites, multicontrato autorizado, Inicio, Facturas, PDFs protegidos, Movimientos/comprobantes, Mi servicio, Mi cuenta, FAQs, SIRO, idempotencia, posting condicionado, Wi-Fi con challenge y SOAP de lectura.

Las pruebas reales de Phantom requieren HTTPS e identidad validada. SIRO/posting/Wi-Fi/tickets/upgrade quedan deshabilitados inicialmente. Productos desconocidos son null, no []. Catálogos vacíos. Central preparado sin channel-key; fallback a WhatsApp oficial sin envío automático. Speedtest preparado sin origen inventado.

Credenciales técnicas suministradas: guardar en configuración privada; nunca Git/frontend. Ver LARANET-CONFIG.md, LARANET-VALIDATION.md y DEPLOYMENT.md. Publicar el subdominio de prueba no reemplaza los enlaces de la web actual.

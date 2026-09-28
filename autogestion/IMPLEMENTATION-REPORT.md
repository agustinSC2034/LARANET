# Mi LARANET: entrega de la primera versión

Fecha: 28/09/2026. La instrucción directa del usuario autoriza commit, push y publicación de prueba; prevalece sobre el no-deploy del documento adjunto. No autoriza cambiar el acceso público existente ni ejecutar operaciones reales sobre clientes.

1. **Resumen.** Port completo del portal actual, con frontend, backend PHP, adaptadores, fixtures, inspectores, seguridad y documentación. Demo local funcional. La conexión real queda cerrada hasta validar infraestructura y contratos LARANET.
2. **Estado previo.** LARANET era un sitio estático sin autogestion, limpio en main `634303c194b0f08e8e00b70dde6b905f7f8ce978`. Se preservaron su HTML, assets y redirecciones.
3. **Referencia.** Usittel_V3.0 main `8ef46dab5cd8cbafbef115c5c0f2a61fb423cd21`, local/remoto coincidentes. Botmaker_functions_LARANET main `1a0597261e04218385de0f2ab13c960f937c0758`, revisado como evidencia auxiliar, sin copiar secretos ni autenticación permisiva.
4. **Estructura.** autogestion/index.html, api.php, js/, assets/, server/, tests/, vendor/librespeed/, scripts de desarrollo/build/check/lint/empaquetado y documentación. Inventario exhaustivo: FILES.md.
5. **Frontend.** Login, Inicio, Facturas, Mi servicio, Soporte y Mi cuenta; navegación móvil/desktop, diálogos, accesibilidad básica, estados de carga/error/sin datos. No framework ni reconstrucción de arquitectura.
6. **Branding.** Logos y favicon reales de LARANET copiados a la carpeta propia, Inter local, azul/violeta/slate, nombres y textos propios. WhatsApp verificado en la web existente. No assets públicos reemplazados.
7. **Backend.** PHP 8.2+, namespace MiLaranet, variables MI_LARANET_*, cookies y runtime propios. api.php portable para raíz del subdominio y /autogestion. Hosting sin configuración no cae silenciosamente a demo.
8. **Login.** Se conserva comparación estricta de las credenciales de autogestión. Usuario numérico es candidato, nunca autorización. No DNI como contraseña ni comparación relajada. Falta certificar ID y tipos reales de LARANET.
9. **Multicontrato.** Descubrimiento y permisos del lado servidor, cambio invalida datos/respuestas anteriores. Demo permite dos contratos y tiene prueba específica contra contaminación entre ellos.
10. **Home.** Estado administrativo separado de conexión; no se deduce suspensión por deuda. Resumen de cuenta, selector de servicio y accesos rápidos.
11. **Facturas.** Estado de cuenta, saldo fuente, listado paginado, IDT y detalle. Pago y PDF sujetos a disponibilidad comprobada; no se inventa un enlace real.
12. **PDF.** Proxy protegido con pertenencia al contrato, host permitido, MIME/tamaño y sin redirecciones arbitrarias. Documento demo marcado sin validez fiscal. Descarga real pendiente de un cliente autorizado.
13. **Movimientos.** Port del historial CRM y comprobantes protegidos; conserva errores/indisponibilidad explícitos. No se presenta historial ficticio como una lectura real.
14. **SIRO.** Transporte, intención, consulta, confirmación, ledger durable y locks portados. Config privada preparada con credenciales recibidas y convenio propio. Se valida sufijo del CPE contra empresa cuando está configurada. lab_ida explícito obligatorio; rango reservado pendiente. Retorno solo navega, nunca confirma. El error 405 de base de deuda no corresponde a una operación usada por este portal.
15. **Phantom posting.** Portado con preflight, verificación de factura/cuenta, estados inciertos, idempotencia y sin retry ciego. Disabled; sin imputaciones reales.
16. **Productos.** Campos/catálogos vacíos hasta certificación. null significa desconocido y [] vacío confirmado. Reglas de ocultación e inferencias IPTV de la referencia ahora opt-in; WiFi+ no se oculta por defecto.
17. **Ofertas.** Motor portado; catálogo comercial vacío. Sin precios, planes ni ofertas de otra empresa inventados.
18. **Wi-Fi.** Flujo real con modelo certificado, prefijo configurable obligatorio, challenge, CSRF, confirmación, HMAC y locks. Timeout conserva resultado incierto. Modelos/prefijo reales pendientes; ninguna escritura ejecutada.
19. **SOAP.** Lecturas acotadas y perfiles configurables; deshabilitado. No se incorporó un writer de upgrade ni se ejecutaron cambios de plan.
20. **Speedtest.** Motor disponible, sin dominio supuesto. URL/origen vacíos; interfaz explica que todavía no está disponible. No se presenta una medición sintética como real.
21. **Central.** Adaptador conservado. No se encontró una channel-key LARANET validada: queda vacío y no carga el SDK. Fallback explícito a WhatsApp, sin enviar mensajes automáticamente.
22. **Mi cuenta.** Datos del contrato seleccionado, ayuda para contacto/acceso y cierre de sesión. No se editan datos reales sin una integración habilitada.
23. **Soporte.** FAQ y apertura del canal disponible; tickets/escrituras deshabilitados. Ticket demo marcado como ejemplo.
24. **Seguridad.** Sesiones privadas/HttpOnly/SameSite/secure bajo HTTPS, regeneración y expiración; CSRF/origen; rate limits; HMAC/locks; TLS verificado; límites y allowlists de documentos; CSP; sin logs de secretos. Config/runtime fuera del repositorio y DocumentRoot. QA no certifica producción.
25. **Root redirect.** **NO fue modificado.** .htaccess líneas 11 y 14 conserva destinos Phantom, tanto autogestion como autogestión.
26. **Links a Phantom.** **NO fueron reemplazados.** index.html:508,1070; ayuda/index.html:200,260,406,1015,1064. Ver GO-LIVE.md.
27. **Config privada.** Lista exacta de nombres, sin valores, en LARANET-CONFIG.md y plantilla server/config.example.php. Archivo local preparado fuera del repositorio en AppData/Local/mi-laranet-private/config.php. No se guardó el bearer temporal adjunto.
28. **Validaciones Phantom pendientes.** HTTPS accesible y certificado; ID/tipos de credenciales; asociaciones; saldo/facturas/PDF; movimientos CRM; modelo/bandas Wi-Fi; campos/productos; endpoints/perfiles SOAP. Secuencia concreta en LARANET-VALIDATION.md.
29. **Clientes/equipos para QA.** Activo simple; multicontrato; suspendido; con impagas; con adicionales; un equipo por modelo y banda; cliente de laboratorio SIRO elegido. No se enumeraron clientes masivamente.
30. **Tests.** npm run test:mi-laranet: 1034 backend + 10 catálogo + 49 Wi-Fi + 61 presentación + 14 Central + 89 aislamiento LARANET + 16 demo = **1273 verificaciones**. Todas con fixtures/sin llamadas reales. Smoke PHP local: índice/assets 200, server/tests/README 404; bootstrap demo, flags de pagos/posting/historial false.
31. **PHP syntax.** npm run lint:mi-laranet pasó; PHP local 8.4.25. Incluye chequeo de todos los PHP propios.
32. **JS/build.** El mismo lint pasó sobre 100 archivos PHP/JS; build Tailwind exitoso. Aviso no bloqueante de Browserslist desactualizado. Auditoría npm detectó alerta preexistente en sharp <0.35.4, herramienta de conversión del sitio original, no incluida en el paquete PHP; no se alteró fuera de alcance.
33. **Secret scan.** npm run check:mi-laranet y búsqueda exacta de credenciales suministradas: sin hallazgos. Config privada y .release ignorados por Git. No se agregaron secretos a frontend/paquete/repositorio.
34. **Remanentes.** Test de aislamiento escanea runtime PHP/JS/CSS/HTML sin referencias activas a la empresa fuente, sus rutas de hosting o su canal. Menciones históricas únicamente documentales; fixtures no certifican datos LARANET.
35. **Diff check.** git diff --check requerido antes del commit; archivos públicos originales comparados contra HEAD sin diferencias.
36. **Archivos modificados.** .gitignore, package.json, package-lock.json. Scripts propios y Tailwind de desarrollo; dependencia sharp original preservada.
37. **Archivos nuevos.** Toda autogestion/. Lista completa en FILES.md; paquete de runtime: 61 archivos, sin config, tests ni CLI inspectores.
38. **Commit.** Mensaje previsto: feat: add Mi LARANET self-service portal. El hash definitivo se entrega en la respuesta final y es verificable con git log.
39. **Working tree.** Se verifica después de commit/push; el estado definitivo se informa en la respuesta final. Artefactos .release y runtime privados no se versionan.
40. **Siguientes pasos.** A: datos del cliente de laboratorio, rango SIRO reservado, channel-key, mappings, modelos/prefijo y origen speedtest. B: QA con los clientes/equipos anteriores, PDF y conciliación autorizada. C: Phantom HTTPS, hosting PHP 8.2+, subdominio/DNS/SSL y almacenamiento privado. D: activar cada capacidad ya certificada y, en otra etapa autorizada, reemplazar botones públicos. Las credenciales técnicas ya fueron suministradas; no es necesario volver a pedirlas.

## Estado de publicación y QA

Demo local revisada en navegador: login, selección de ambos contratos, vacío de facturas del segundo, listado/detalle y pago demo bloqueado del primero, Mi servicio, Mi cuenta y fallback de contacto. Capturas móvil/escritorio inspeccionadas; anchos efectivos 383, 434 y 853 CSS px sin overflow horizontal en vistas observadas. La emulación de viewport estuvo afectada por zoom y cambios de pestaña; no se declara una matriz exacta de dispositivos certificada. Consola sin errores en la revisión final. Descarga real/PDF real no probados.

Hosting observado: Ferozo c1971626 / 200.58.111.41, PHP **7.4 FPM**, sin despliegue Git configurado ni subdominio mi al inicio. El cambio de PHP visible afecta a la cuenta; se solicitó autorización específica antes de aplicarlo. La carga del paquete se interrumpió por suspensión de pestañas y la revisión automática bloqueó reabrir el administrador, por lo que se pidió autorización para retomarlo. No se declara el subdominio publicado hasta verificarlo. El paquete local está listo en .release/mi-laranet.zip.

HTTPS de Phantom probado sin credenciales en 5594 y 443: timeout. Eso no prueba disponibilidad desde el hosting y no justifica enviar credenciales por HTTP. No hubo intención/pago SIRO, base de deuda, posting, cambio Wi-Fi, ticket real ni escritura SOAP.

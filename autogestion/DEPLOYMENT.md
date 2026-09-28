# Despliegue de prueba

Hosting observado: Ferozo/Donweb, cuenta c1971626, servidor 200.58.111.41. No copiar handlers ni paths de cPanel. Al iniciar este trabajo no había subdominios ni repositorios Git configurados. Push a GitHub por sí solo no despliega este hosting.

Destino: subdominio mi.laranet.com.ar, DocumentRoot dedicado a public_html/autogestion. Mantener intacta la regla pública /autogestion -> Phantom. En un vhost cuya raíz sea esa carpeta, la petición / no coincide con esa redirección; verificarlo en el servidor.

Paquete: npm run package:mi-laranet produce .release/mi-laranet.zip. Solo index.html, api.php, .htaccess, assets, js, worker y backend de runtime. Sin tests, inspectores, config privada ni documentación. Subir/extractar esa carpeta sin reemplazar public_html/.htaccess ni index.html.

Config convencional: directorio mi-laranet-private junto a public_html; config.php y runtime. api.php respeta MI_LARANET_CONFIG/MI_LARANET_RUNTIME explícitos. Permisos recomendados: directorio privado/runtime 700, config/archivos runtime 600, adaptados al usuario PHP del hosting.

PHP mínimo 8.2, extensiones curl, json, dom, libxml, openssl. No asumir AddHandler ea-php82 de cPanel. HTTPS del subdominio obligatorio antes de login real. Prueba inicial puede usar mode=demo explícito con las credenciales técnicas almacenadas pero todas las escrituras disabled. Al cambiar a phantom, la validación rechaza HTTP/config incompleta; no cae silenciosamente a demo.

Smoke: página/brand/assets, bootstrap, cookies, sesión/demo logout, CSP, server/tests/config/docs inaccesibles, web principal y redirect iguales. Rollback: desactivar subdominio o restaurar solo carpeta nueva; no borrar runtime con intentos de pago.

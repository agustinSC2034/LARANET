# Activación pública posterior

La autorización actual permite push y preparar/publicar el subdominio de prueba. No autoriza sustituir el botón público. La regla raíz NO fue modificada y los links a Phantom NO fueron reemplazados.

Al activar el acceso público: backup, suite/build/check, HTTPS y configuración, pruebas cliente/PDF/multicontrato, SIRO autorizado, Central y modelos certificados, QA móvil/desktop, monitoreo y rollback. No es necesario habilitar funciones pendientes para publicar las que estén validadas.

Reglas a revisar únicamente en esa futura etapa: RewriteRule ^autogestion/?$ y RewriteRule ^autogestión/?$ del .htaccess raíz, ambas redirigen a CRM_APP/login.php. Sustituir el destino por https://mi.laranet.com.ar/ cuando se autorice.

Enlaces directos actuales inventariados al final de este documento. Actualizar esos href después de validar el subdominio, conservando backup. Los accesos relativos /autogestion se actualizan mediante la regla; no reemplazar otras URLs indiscriminadamente.

- index.html:508

- index.html:1070

- ayuda/index.html:200

- ayuda/index.html:260

- ayuda/index.html:406

- ayuda/index.html:1015

- ayuda/index.html:1064

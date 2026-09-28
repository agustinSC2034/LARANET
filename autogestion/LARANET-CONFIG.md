# Configuración privada

La estructura exhaustiva está en server/config.example.php. Copiar fuera del repositorio y de todos los DocumentRoot. No se imprimen valores privados.

Variables de entorno: MI_LARANET_CONFIG (archivo PHP absoluto), MI_LARANET_RUNTIME (directorio privado persistente), MI_LARANET_PHP (solo herramientas locales).

| Grupo | Claves |
|---|---|
| Ejecución | mode, idle_seconds, max_seconds, timeout_seconds, connect_timeout_seconds |
| Phantom | phantom_url, phantom_auth_mode, api_user, api_pass, customer_id_field, login_users, allowed_idas, ca_file |
| Presentación | profile_fields.name/address/plan/city/email/phone |
| Legacy inspectores | customer_path, balance_path; no cambian selección ni fuente del saldo |
| Productos | service_product_fields, service_catalog, commercial_catalog, product_rules.ignored_labels/hidden_iptv_base/iptv_implies_sensa |
| SIRO | siro.enabled/lab_ida/user/password/return_base/company_number/receipt_start/receipt_end |
| Posting | phantom_posting.enabled/lab_ida/crm_url/origin |
| Wi-Fi | wifi.enabled/model_field/models/dual_band_models/ssid_prefix |
| SOAP | soap.read_enabled/lab_ida/url/profile_names/profile_ids |
| Solicitudes | tickets.enabled/lab_ida/clear_response/products; mantener disabled |
| Upgrade | upgrade.enabled/lab_ida/plans; no habilita writers |
| Avisos | notifications.email_enabled/botmaker_enabled; sin adaptador de entrega |
| Medición | speedtest_server; origen HTTPS exacto |
| Frontend público | js/brand.js: centralChannelKey, speedtestUrl, logo, mobileLogo, favicon, supportUrl |

No se necesita service_login_idas: cada candidato numérico se autentica exactamente y el servidor descubre sus contratos. allowed_idas limita inspectores, no concede permisos al navegador. customer_id_field sigue null hasta validar ID y tipos de Autogestion_User/Pass.

Recibidas credenciales Phantom y SIRO. Pendientes: endpoint Phantom HTTPS válido, identidad real, cliente de laboratorio, rango SIRO reservado, campo/modelos/prefijo Wi-Fi certificados, channel-key Central, origen speedtest y mappings comerciales. El bearer temporal del ejemplo SIRO no se guarda; el transporte obtiene un token nuevo por solicitud.

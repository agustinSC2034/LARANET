# Wi-Fi

Portado el flujo probado: selected_ida servidor, CSRF, modelo exacto, challenge de 600 segundos, confirmación, HMAC, lock por contrato y resultado durable. Ticket=0 en la escritura. Timeout/ack ambiguo -> UNKNOWN y bloqueo de reintentos hasta revisión.

wifi.enabled=false, model_field=null, models=[], dual_band_models=[], ssid_prefix=null. LARANET_ es solo prefijo de la demo: para operar se requiere configurar uno validado. El backend lo devuelve con el challenge; el cliente no puede removerlo. Un cambio del prefijo/configuración invalida el challenge.

Reglas portadas del código actual: SSID total máximo 20 caracteres, sufijo no vacío, vocales acentuadas normalizadas, espacios del SSID convertidos a _. Password 8–20 caracteres, sin espacios ni vocales acentuadas; permite ñ/Ñ y puntuación limitada. Las reglas del viejo formulario de demo no autorizan equipos reales.

Certificar el campo de modelo y cada modelo/banda por separado. ONU_Modelo observado en la fuente representa chipset, no debe habilitarse por inferencia. Ninguna escritura real realizada.

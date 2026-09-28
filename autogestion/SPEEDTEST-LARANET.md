# Medición de velocidad

Motor LibreSpeed y licencia portados. Sin backend/origen LARANET confirmado. speedtest_server=null y brand.speedtestUrl vacío; se muestra indisponibilidad explícita, no velocidades inventadas ni un dominio de USITTEL.

Para habilitar: verificar servidor HTTPS, CORS exacto para mi.laranet.com.ar, garbage.php/empty.php, límites y capacidad. Añadir solo ese origen a connect-src en .htaccess y configuración. Telemetría/consulta ISP deshabilitadas, worker local. La suite usa un worker simulado y no consume ancho de banda real.

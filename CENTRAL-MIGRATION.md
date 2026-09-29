# Central en la web pública de LARANET

`/atencion/` es la página dedicada de Central: un único `<central-chat>` con `mode="fill-container"`, sin navegación ni WhatsApp. El sitio público (`/` y `/ayuda/`) muestra el botón flotante propio de Central. El botón flotante de WhatsApp está oculto desde el primer render por `assets/css/site-chat.css`; los enlaces de WhatsApp dentro del contenido conservan sus destinos y mensajes. El desvío a `/datos-personales/` va directo al PDF y no carga el widget.

La channel-key pública de LARANET es `Z_4c42RDCDp7Fj33yZlPHw|bSnjj0SyitBt-M7DdIokAA`. El SDK es `https://web.central.chat/widget/core.js`. No se almacenan credenciales ni eventos de conversación.

El panel usa el botón azul propio `#site-chat-launcher`, el cierre propio `#site-chat-close` y `show()`, `maximize()` y `hide()` de Central. `Escape` usa el mismo cierre; el foco vuelve al launcher y `body.site-chat-open` bloquea el scroll de fondo. El widget empieza con el atributo `hide` y al montarse se sincroniza con el estado del panel. No dependemos del launcher ni de la X nativos.

Configuración recomendada del canal en Botmaker Central, **pendiente de confirmar allí**: **Se puede cerrar OFF**, **Se abre solo OFF**, **Panel ancho OFF**, **Barra de navegación OFF**, **Empieza oculto ON**. Este cambio no modifica Botmaker. Si la X nativa sigue apareciendo, corregir esa configuración; no usar hacks dentro del widget.

## Activación del botón público

El botón de Central reemplazó el botón flotante de WhatsApp antes del 01/10 por pedido del usuario. La regla `.site-whatsapp-launcher { display: none !important; }` oculta solamente ese botón; el atributo `hidden` mantiene el panel de Central cerrado hasta pulsar el launcher. Los enlaces de WhatsApp del contenido permanecen como están salvo decisión comercial posterior.

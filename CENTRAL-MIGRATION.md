# Central en la web pública de LARANET

`/atencion/` es la página dedicada de Central: un único `<central-chat>` con `mode="fill-container"`, sin navegación ni WhatsApp. El sitio público (`/` y `/ayuda/`) carga el mismo canal, pero el launcher y el panel propios están ocultos desde el primer render mediante la regla **MIGRACIÓN HASTA EL 01/10** de `assets/css/site-chat.css`. WhatsApp sigue visible con sus enlaces y mensajes existentes. El desvío a `/datos-personales/` va directo al PDF y no carga el widget.

La channel-key pública de LARANET es `Z_4c42RDCDp7Fj33yZlPHw|bSnjj0SyitBt-M7DdIokAA`. El SDK es `https://web.central.chat/widget/core.js`. No se almacenan credenciales ni eventos de conversación.

El panel futuro usa el botón azul propio `#site-chat-launcher`, el cierre propio `#site-chat-close` y `show()`, `maximize()` y `hide()` de Central. `Escape` usa el mismo cierre; el foco vuelve al launcher y `body.site-chat-open` bloquea el scroll de fondo. El widget empieza con el atributo `hide` y al montarse se sincroniza con el estado del panel. No dependemos del launcher ni de la X nativos.

Configuración recomendada del canal en Botmaker Central, **pendiente de confirmar allí**: **Se puede cerrar OFF**, **Se abre solo OFF**, **Panel ancho OFF**, **Barra de navegación OFF**, **Empieza oculto ON**. Este cambio no modifica Botmaker. Si la X nativa sigue apareciendo, corregir esa configuración; no usar hacks dentro del widget.

## Cambio del 01/10

En `assets/css/site-chat.css`, reemplazar el bloque de migración:

```css
#site-chat-panel,
#site-chat-launcher { display: none !important; }
```

por:

```css
.site-whatsapp-launcher { display: none !important; }
```

El atributo `hidden` mantiene el panel cerrado hasta pulsar nuestro launcher. No se debe modificar `js/site-chat.js`. Verificar apertura, cierre, Escape y foco en desktop y móvil antes de publicar ese cambio. Los enlaces de WhatsApp del contenido permanecen como están salvo decisión comercial posterior.

(() => {
  const launcher = document.getElementById('site-chat-launcher');
  const panel = document.getElementById('site-chat-panel');
  const close = document.getElementById('site-chat-close');
  const chat = panel?.querySelector('central-chat');
  if (!launcher || !panel || !close || !chat) return;

  let isOpen = false;
  let mounted = false;

  function syncWidget() {
    if (!mounted) return;
    if (isOpen) {
      chat.show();
      chat.maximize();
    } else {
      chat.hide();
    }
  }

  function openChat() {
    isOpen = true;
    chat.removeAttribute('hide');
    panel.hidden = false;
    launcher.hidden = true;
    launcher.setAttribute('aria-expanded', 'true');
    document.body.classList.add('site-chat-open');
    syncWidget();
    // Central puede tomar foco durante show(); devolverlo a nuestro cierre tras el frame.
    requestAnimationFrame(() => {
      if (isOpen) close.focus({ preventScroll: true });
    });
  }

  function closeChat() {
    isOpen = false;
    syncWidget();
    chat.setAttribute('hide', '');
    panel.hidden = true;
    launcher.hidden = false;
    launcher.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('site-chat-open');
    launcher.focus({ preventScroll: true });
  }

  chat.addEventListener('central-chat-mount', () => {
    mounted = true;
    syncWidget();
  });
  // El SDK puede registrar el componente antes de que se instale el listener.
  customElements.whenDefined('central-chat').then(() => {
    if (!mounted) {
      mounted = true;
      syncWidget();
    }
  });
  launcher.addEventListener('click', openChat);
  close.addEventListener('click', closeChat);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen) closeChat();
  });
})();

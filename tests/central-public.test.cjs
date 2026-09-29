const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const key = 'Z_4c42RDCDp7Fj33yZlPHw|bSnjj0SyitBt-M7DdIokAA';
const attention = read('atencion/index.html');
const attentionCss = read('atencion/attention.css');
const siteCss = read('assets/css/site-chat.css');
const script = read('js/site-chat.js');

assert.match(attention, /https:\/\/web\.central\.chat\/widget\/core\.js/);
assert.equal((attention.match(/<central-chat\b/g) || []).length, 1);
for (const value of [`channel-key="${key}"`, 'locale="es"', 'mode="fill-container"', 'noindex, nofollow', 'no-referrer', '<noscript>']) {
  assert.ok(attention.includes(value), `Falta ${value} en /atencion`);
}
for (const forbidden of [/<header\b/i, /<footer\b/i, /whatsapp/i, /site-chat-launcher/i, /site-chat-panel/i]) {
  assert.doesNotMatch(attention, forbidden);
}
assert.match(attentionCss, /height:\s*100dvh/);
assert.match(attentionCss, /central-chat\s*\{[^}]*width:\s*100%;\s*height:\s*100%/s);
assert.match(attentionCss, /safe-area-inset-bottom/);

for (const file of ['index.html', 'ayuda/index.html']) {
  const html = read(file);
  for (const id of ['site-chat-launcher', 'site-chat-panel', 'site-chat-close']) {
    assert.equal((html.match(new RegExp(`id="${id}"`, 'g')) || []).length, 1, `${file}: ${id}`);
  }
  assert.equal((html.match(/<central-chat\b/g) || []).length, 1, `${file}: widget duplicado`);
  assert.ok(html.includes(`channel-key="${key}"`));
  assert.ok(html.includes('https://web.central.chat/widget/core.js'));
  assert.match(html, /site-chat\.js/);
  assert.match(html, /https:\/\/wa\.me\/5491123948816/);
  assert.match(html, /<central-chat hide\b/);
  assert.ok(html.indexOf('id="site-chat-close"') > html.indexOf('id="site-chat-panel"'));
}
assert.match(siteCss, /#site-chat-panel,\s*#site-chat-launcher\s*\{\s*display:\s*none\s*!important/);
assert.match(siteCss, /#1e3a8a/);
assert.match(siteCss, /site-chat-close\s*\{[^}]*z-index:\s*10[^}]*width:\s*44px;[^}]*height:\s*44px/s);
assert.match(siteCss, /site-chat-panel\s*\{\s*inset:\s*0;\s*width:\s*100vw;\s*height:\s*100dvh/s);
assert.match(siteCss, /body\.site-chat-open\s*\{\s*overflow:\s*hidden/);
for (const forbidden of [/MutationObserver/, /shadowRoot/, /setInterval/, /central-chat-event/, /console\./]) {
  assert.doesNotMatch(script, forbidden);
}

class FakeElement {
  constructor() { this.hidden = false; this.attributes = new Map(); this.listeners = new Map(); this.focusCount = 0; }
  addEventListener(name, callback) { this.listeners.set(name, callback); }
  dispatch(name, event = {}) { this.listeners.get(name)?.(event); }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); }
  focus() { this.focusCount++; }
}
const launcher = new FakeElement();
const panel = new FakeElement();
const close = new FakeElement();
const chat = new FakeElement();
const calls = [];
chat.show = () => calls.push('show');
chat.hide = () => calls.push('hide');
chat.maximize = () => calls.push('maximize');
panel.hidden = true;
panel.querySelector = selector => selector === 'central-chat' ? chat : null;
chat.setAttribute('hide', '');
const classes = new Set();
const document = {
  getElementById: id => ({ 'site-chat-launcher': launcher, 'site-chat-panel': panel, 'site-chat-close': close })[id],
  body: { classList: { add: value => classes.add(value), remove: value => classes.delete(value) } },
  listeners: new Map(),
  addEventListener(name, callback) { this.listeners.set(name, callback); },
};
let defined;
const customElements = { whenDefined: () => new Promise(resolve => { defined = resolve; }) };
const frames = [];
vm.runInNewContext(script, { document, customElements, requestAnimationFrame: callback => frames.push(callback) });

// Abrir antes del montaje conserva la intención y la aplica al widget al montarse.
launcher.dispatch('click');
assert.equal(panel.hidden, false);
assert.equal(launcher.hidden, true);
assert.equal(launcher.attributes.get('aria-expanded'), 'true');
assert.ok(classes.has('site-chat-open'));
frames.shift()();
assert.equal(close.focusCount, 1);
assert.deepEqual(calls, []);
chat.dispatch('central-chat-mount');
assert.deepEqual(calls, ['show', 'maximize']);
close.dispatch('click');
assert.deepEqual(calls, ['show', 'maximize', 'hide']);
assert.equal(panel.hidden, true);
assert.equal(launcher.hidden, false);
assert.equal(launcher.attributes.get('aria-expanded'), 'false');
assert.ok(!classes.has('site-chat-open'));
assert.equal(launcher.focusCount, 1);
assert.ok(chat.attributes.has('hide'));
launcher.dispatch('click');
frames.shift()();
document.listeners.get('keydown')({ key: 'Escape' });
assert.equal(panel.hidden, true);
assert.equal(launcher.focusCount, 2);
launcher.dispatch('click');
assert.equal(panel.hidden, false, 'se puede volver a abrir');
defined();

console.log('Central público: estructura, migración y controles OK');

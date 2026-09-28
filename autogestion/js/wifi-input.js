const allowed = /^[A-Za-zñÑ0-9,.:;*+_@=!-]$/u;
const accents = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' };
export let WIFI_SSID_PREFIX = 'LARANET_';
export function setWifiPrefix(prefix) {
  if (!/^[A-Za-z0-9_-]{1,12}$/.test(prefix || '')) throw new Error('Configuración Wi-Fi no disponible.');
  WIFI_SSID_PREFIX = prefix;
}

const characterError = (value, label) => {
  for (const character of value) {
    if (allowed.test(character)) continue;
    if (/\s/u.test(character)) return `${label} contiene un espacio no permitido.`;
    return `${label} contiene un carácter no permitido (${character}).`;
  }
  return null;
};

export function validateWifiSsid(value) {
  if (typeof value !== 'string') return { error: 'El nombre de la red no es válido.' };
  if (!value.startsWith(WIFI_SSID_PREFIX)) return { error: `El nombre de la red debe comenzar con ${WIFI_SSID_PREFIX}.` };
  const suffix = value.slice(WIFI_SSID_PREFIX.length);
  if (!suffix) return { error: `Agregá un nombre después de ${WIFI_SSID_PREFIX}.` };
  const normalized = WIFI_SSID_PREFIX + suffix.replace(/[áéíóúÁÉÍÓÚ]/gu, character => accents[character]).replaceAll(' ', '_');
  const error = characterError(normalized, 'El nombre de la red');
  if (error) return { error };
  const length = [...normalized].length;
  if (length > 20) return { error: `Podés agregar hasta ${20-WIFI_SSID_PREFIX.length} caracteres después de ${WIFI_SSID_PREFIX}.` };
  return { value: normalized, changed: normalized !== value };
}

export function validateWifiPassword(value) {
  if (typeof value !== 'string') return { error: 'La contraseña no es válida.' };
  if (value.includes(' ')) return { error: 'La contraseña no puede contener espacios. Podés usar _ en su lugar.' };
  if (/[áéíóúÁÉÍÓÚ]/u.test(value)) return { error: 'La contraseña no puede contener tildes. Usá letras sin acento.' };
  const error = characterError(value, 'La contraseña');
  if (error) return { error };
  const length = [...value].length;
  if (length < 8 || length > 20) return { error: 'La contraseña debe tener entre 8 y 20 caracteres.' };
  return { value };
}

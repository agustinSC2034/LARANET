const assert = require('node:assert/strict');

(async () => {
  const { WIFI_SSID_PREFIX, validateWifiSsid, validateWifiPassword } = await import('../js/wifi-input.js');
  let checks = 0;
  const check = (actual, expected) => { assert.deepEqual(actual, expected); checks++; };
  check(WIFI_SSID_PREFIX, 'LARANET_');
  check(validateWifiSsid('LARANET_Mi Casa'), { value: 'LARANET_Mi_Casa', changed: true });
  check(validateWifiSsid('LARANET_Agustín-5G'), { value: 'LARANET_Agustin-5G', changed: true });
  check(validateWifiSsid('LARANET_ÁéÍóÚñÑ_1'), { value: 'LARANET_AeIoUñÑ_1', changed: true });
  check(validateWifiSsid('LARANET_A,.:;*+_-@=!'), { value: 'LARANET_A,.:;*+_-@=!', changed: false });
  check(validateWifiSsid('LARANET_ñÑabc'), { value: 'LARANET_ñÑabc', changed: false });
  for (const length of [0, 1, 12, 13]) {
    const value = WIFI_SSID_PREFIX + 'A'.repeat(length);
    check(validateWifiSsid(value), length === 0
      ? { error: 'Agregá un nombre después de LARANET_.' }
      : length <= 12 ? { value, changed: false }
      : { error: 'Podés agregar hasta 12 caracteres después de LARANET_.' });
  }
  check(validateWifiSsid('Mi Casa'), { error: 'El nombre de la red debe comenzar con LARANET_.' });
  check(validateWifiSsid('laranet_Casa'), { error: 'El nombre de la red debe comenzar con LARANET_.' });
  check(validateWifiSsid('LARANET_WiFi#Casa'), { error: 'El nombre de la red contiene un carácter no permitido (#).' });
  for (const forbidden of ['/', '\\', '$', '%', '<', '>', '?', '¿', '#', '\t', '\n', '\r', '\u00a0']) {
    assert.ok(validateWifiSsid(`LARANET_Casa${forbidden}WiFi`).error); checks++;
    assert.ok(validateWifiPassword(`Clave${forbidden}123`).error); checks++;
  }
  check(validateWifiPassword('ClaveCasa123!'), { value: 'ClaveCasa123!' });
  check(validateWifiPassword('Clave Casa'), { error: 'La contraseña no puede contener espacios. Podés usar _ en su lugar.' });
  check(validateWifiPassword('Claveá123'), { error: 'La contraseña no puede contener tildes. Usá letras sin acento.' });
  check(validateWifiPassword('ClaveÁ123'), { error: 'La contraseña no puede contener tildes. Usá letras sin acento.' });
  check(validateWifiPassword('A,.:;*+_-@=!ñÑ1'), { value: 'A,.:;*+_-@=!ñÑ1' });
  for (const length of [7, 8, 20, 21]) {
    const value = 'A'.repeat(length);
    check(validateWifiPassword(value), length >= 8 && length <= 20
      ? { value }
      : { error: 'La contraseña debe tener entre 8 y 20 caracteres.' });
  }
  check(validateWifiSsid('LARANET_'+'A'.repeat(12)), { value: 'LARANET_'+'A'.repeat(12), changed: false });
  console.log(`wifi input: ${checks} assertions`);
})().catch(error => { console.error(error); process.exitCode = 1; });

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
let count = 0;
for (const name of fs.readdirSync(__dirname, { recursive: true })) {
  const file = path.join(__dirname, name);
  if (!fs.statSync(file).isFile() || name.startsWith('vendor')) continue;
  const php = name.endsWith('.php');
  if (!php && !/\.(?:js|cjs)$/.test(name)) continue;
  const result = spawnSync(php ? process.env.MI_LARANET_PHP || 'php' : process.execPath,
    [php ? '-l' : '--check', file], { encoding: 'utf8', windowsHide: true });
  if (result.error || result.status !== 0) {
    console.error(name, result.error?.message || result.stdout + result.stderr);
    process.exit(1);
  }
  count++;
}
console.log(`${count} archivos PHP/JS: sintaxis correcta.`);

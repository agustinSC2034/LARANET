const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const root = path.resolve(__dirname, '../..');
const php = spawnSync(process.env.MI_LARANET_PHP || 'php', [path.join(__dirname, 'port-safety.php')], { encoding:'utf8', windowsHide:true });
assert.equal(php.status,0,php.error?.message || php.stderr);
assert.match(php.stdout,/^\d+$/);
let count=Number(php.stdout);
for (const file of fs.readdirSync(path.join(root,'autogestion'),{recursive:true})) {
  if (!/\.(php|js|cjs|html|css)$/.test(file) || file.startsWith('tests') || file.startsWith('vendor')) continue;
  assert.doesNotMatch(fs.readFileSync(path.join(root,'autogestion',file),'utf8'),/usittel|home4|38\.253|wiOT-40/i,file);count++;
}
const redirect=fs.readFileSync(path.join(root,'.htaccess'),'utf8');
assert.match(redirect,/RewriteRule \^autogestion\/\?\$ http:\/\/38\.159\.225\.250:5594\/PHANTOM\/Includes\/CRM\/CRM_APP\/login\.php/);count++;
console.log(`LARANET isolation: ${count} assertions; no real API calls.`);

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$appRoot = $PSScriptRoot
$outputRoot = Join-Path (Split-Path $appRoot) '.release'
New-Item -ItemType Directory -Force -Path $outputRoot | Out-Null
$zipPath = Join-Path $outputRoot 'mi-laranet.zip'
$files = @('index.html', 'api.php', '.htaccess', 'server/.htaccess', 'vendor/librespeed/speedtest_worker.js', 'vendor/librespeed/LICENSE')
$files += Get-ChildItem (Join-Path $appRoot 'assets') -File | Where-Object Extension -In '.webp','.png','.svg','.woff2','.css','.txt' | ForEach-Object { 'assets/' + $_.Name }
$files += Get-ChildItem (Join-Path $appRoot 'js') -Filter '*.js' -File | ForEach-Object { 'js/' + $_.Name }
$files += Get-ChildItem (Join-Path $appRoot 'server') -Filter '*.php' -File | Where-Object Name -CMatch '^[A-Z]|^router.php$' | ForEach-Object { 'server/' + $_.Name }
# Create overwrites only this generated artifact; never clears a source directory.
$stream = [IO.File]::Open($zipPath, [IO.FileMode]::Create)
$zip = New-Object IO.Compression.ZipArchive($stream, [IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($relative in $files) {
        [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, (Join-Path $appRoot $relative), ('autogestion/' + $relative)) | Out-Null
    }
} finally { $zip.Dispose(); $stream.Dispose() }
Write-Output ('Package: ' + $zipPath + ' (' + $files.Count + ' files; no credentials, tests or CLI inspectors)')

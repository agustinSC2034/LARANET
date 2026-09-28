<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli') {http_response_code(404);exit;}
ini_set('display_errors','0');ini_set('log_errors','0');ini_set('zend.exception_ignore_args','1');
require __DIR__.'/Core.php';require __DIR__.'/Phantom.php';require __DIR__.'/Inspector.php';
require __DIR__.'/AuthGetProbe.php';require __DIR__.'/InvoiceProbe.php';
$failure=null;ob_start();set_error_handler(static function(){throw new \MiLaranet\Failure('PROBE_PHP');});
try {
    if(count($argv)!==2 || $argv[1]!=='1') throw new \MiLaranet\Failure('INSPECTOR_ARGUMENTS');
    $config=\MiLaranet\config();
    if($config['mode']!=='phantom' || !in_array(1,$config['allowed_idas'],true)) throw new \MiLaranet\Failure('CONFIGURATION');
} catch(\Throwable $e) {$failure=$e;}
finally {restore_error_handler();ob_end_clean();}
if($failure!==null) exit(\MiLaranet\writeInspectorFailure('configuracion',$failure));
exit(\MiLaranet\runInvoiceProbe($config));

<?php
declare(strict_types=1);
namespace MiLaranet;
require_once __DIR__.'/../server/Core.php';
require_once __DIR__.'/../server/Phantom.php';
require_once __DIR__.'/../server/Wifi.php';
require_once __DIR__.'/../server/PhantomPayments.php';
require_once __DIR__.'/../server/Payments.php';
require_once __DIR__.'/PaymentFixture.php';
$count=0;
function checkPort(bool $ok): void {if(!$ok) throw new \RuntimeException('Port regression');$GLOBALS['count']++;}
$c=require_once __DIR__.'/../server/config.example.php';
checkPort($c['customer_id_field']===null && $c['allowed_idas']===[]);
checkPort(siroConfig($c)===null && phantomPostingConfig($c)===null);
checkPort($c['wifi']['enabled']===false && wifiConfiguredPrefix($c)===null);
checkPort($c['tickets']['enabled']===false && $c['soap']['read_enabled']===false);
checkPort($c['service_catalog']===[] && $c['commercial_catalog']===[]);
checkPort(serviceProducts(['Productos_Otros'=>[]],$c)===null);
$mapped=$c;$mapped['service_product_fields']=['Productos_Otros'];
checkPort(serviceProducts(['Productos_Otros'=>[]],$mapped)===[]);
checkPort(serviceProducts(['Productos_Otros'=>'WiFi +'],$mapped)===['WiFi +']);
$entries=serviceProductEntries(['Productos_Otros'=>'1/3/26 - IPTV - Abono Básico'],$mapped);
$products=serviceProducts(['Productos_Otros'=>'1/3/26 - IPTV - Abono Básico'],$mapped);
$mapped['service_catalog']=['tv'=>['type'=>'sensa','public_name'=>'Fixture TV','aliases'=>[]]];
checkPort($products===['Abono Básico']);
checkPort(serviceProductState($products,$mapped,$entries)['ids']===[]);
$wifi=['wifi'=>['enabled'=>true,'models'=>['FixtureONU'],'dual_band_models'=>[]]];
checkPort(!wifiGate($wifi,'FixtureONU'));
$wifi['wifi']['ssid_prefix']='TEST_';checkPort(wifiGate($wifi,'FixtureONU'));
checkPort(wifiNormalizedSsid('TEST_Casa','TEST_')==='TEST_Casa');
checkPort(wifiNormalizedSsid('LARANET_Casa','TEST_')===null);
checkPort(wifiNormalizedSsid('TEST_','TEST_')===null);
checkPort(speedtestConfig($c)===null);
$dir=sys_get_temp_dir().'/mi-laranet-port-'.bin2hex(random_bytes(6));mkdir($dir,0700);
try {
    $gateway=new PaymentFixture();
    $payments=new Payments(new PaymentStore($dir),$gateway,['company_number'=>'5120219330','return_base'=>'https://mi.laranet.com.ar','receipt_start'=>70000,'receipt_end'=>70001]);
    $row=['IDT'=>'98','IDA'=>'999','Estado'=>'IMPAGA','Total'=>'1.29','SIRO_CE'=>'0000009990000000000'];
    try {$payments->create(999,'98',fn()=>$row);checkPort(false);} catch(Failure $e) {checkPort($e->kind==='PAYMENT_CPE');}
    checkPort($gateway->requests===[]);
    $row['SIRO_CE']='0000009995120219330';
    $payments->create(999,'98',fn()=>$row);
    checkPort(count($gateway->requests)===1);
    checkPort(str_starts_with($gateway->requests[0]['URL_OK'],'https://mi.laranet.com.ar/api.php?route=payment-return'));
    checkPort($gateway->requests[0]['IdReferenciaOperacion']==='98;1.29;');
} finally {foreach(glob($dir.'/*') as $file)unlink($file);rmdir($dir);}
echo $count;

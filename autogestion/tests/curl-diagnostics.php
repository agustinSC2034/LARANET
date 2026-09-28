<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli' || getenv('MI_LARANET_TEST')!=='1') exit(2);
require __DIR__.'/../server/Core.php';
require __DIR__.'/../server/Phantom.php';
$results=['handshake'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlErrno(35),
    'verify'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlErrno(60),
    'ca_file'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlErrno(77),
    'issuer'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlFailure(60,'SSL certificate problem: unable to get local issuer certificate'),
    'hostname'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlFailure(60,'certificate does not match target host name; token=do-not-print'),
    'expired'=>\MiLaranet\CurlTransport::diagnosticCodeForCurlFailure(60,'certificate has expired')];
$transport=new \MiLaranet\CurlTransport(['connect_timeout_seconds'=>1,'timeout_seconds'=>1,'ca_file'=>__DIR__.'/missing-ca.pem']);
try { $transport->post('https://fixture.invalid',[]); }
catch(\MiLaranet\Failure $e) {$results['missing_ca']=$e->kind;echo json_encode($results,JSON_THROW_ON_ERROR);exit(0);}
exit(1);

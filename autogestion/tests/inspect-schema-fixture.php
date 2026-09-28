<?php
declare(strict_types=1);
if(PHP_SAPI!=='cli' || getenv('MI_LARANET_TEST')!=='1') exit(2);
require __DIR__.'/../server/Core.php';
require __DIR__.'/../server/Phantom.php';
require __DIR__.'/../server/Inspector.php';
require __DIR__.'/FixtureTransport.php';
$config=\MiLaranet\config();
$phantom=new \MiLaranet\Phantom($config,\MiLaranet\privateDir(),new \MiLaranet\FixtureTransport(\MiLaranet\privateDir()));
exit(\MiLaranet\runInspector($phantom,1));
